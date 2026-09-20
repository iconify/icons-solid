import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-9s9sbjt {
  fill: currentColor;
  d: path("M3 21v-1h18v1zm8-4V4h2v13z");
}
</style><path class="t-9s9sbjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:align-flex-end"} {...others} />);
}

export default Component;
