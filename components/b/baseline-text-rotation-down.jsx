import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oerancugj {
  fill: currentColor;
  d: path("M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1zm-7-2.62l5.02 1.87L14 13.12zM6 19.75l3-3H7V4.25H5v12.5H3z");
}
</style><path class="oerancugj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-text-rotation-down"} {...others} />);
}

export default Component;
