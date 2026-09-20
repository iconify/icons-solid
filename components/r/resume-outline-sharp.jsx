import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rtwwe_b8w {
  fill: currentColor;
  d: path("M6 18V6h2v12zm4 0l10-6l-10-6zm2-3.525v-4.95L16.125 12zM12 12");
}
</style><path class="rtwwe_b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:resume-outline-sharp"} {...others} />);
}

export default Component;
