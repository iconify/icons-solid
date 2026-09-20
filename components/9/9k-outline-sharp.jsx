import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jq_nf-imc {
  fill: currentColor;
  d: path("M6.5 15H11V9H6.5v3.5h3v1h-3zM8 11.5V10h1.5v1.5zm5 3.5h1.5v-2.25L16.25 15h1.825l-2.325-3l2.325-3H16.25l-1.75 2.25V9H13zM3 21V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="jq_nf-imc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:9k-outline-sharp"} {...others} />);
}

export default Component;
