import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hhs9ccc9u {
  fill: currentColor;
  d: path("M11 19v-6H2v-2h9V5l11 7zm2-3.65L18.275 12L13 8.65zM13 12");
}
</style><path class="hhs9ccc9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-end-arrow-outline"} {...others} />);
}

export default Component;
