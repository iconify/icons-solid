import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":10,"height":10};
const content = `<style>.crb63ug3l {
  fill: currentColor;
  d: path("M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0");
}
</style><path class="crb63ug3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:presence-busy-10-filled"} {...others} />);
}

export default Component;
