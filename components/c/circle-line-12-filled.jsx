import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.fg2i8dbhu {
  fill: currentColor;
  d: path("M1 6a5 5 0 0 1 10 0zm.1 1a5.002 5.002 0 0 0 9.8 0z");
}
</style><path class="fg2i8dbhu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-line-12-filled"} {...others} />);
}

export default Component;
