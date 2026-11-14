import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6j0kqbbf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 6.5q0-2 2-2t2 2t-2 2t-2-2M6 15q-2 0-2 2t2 2t2-2t-2-2m10 2q0-2 2-2t2 2t-2 2t-2-2");
}
</style><path class="h6j0kqbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:therefore"} {...others} />);
}

export default Component;
