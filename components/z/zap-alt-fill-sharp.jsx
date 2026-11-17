import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i8z4sab7d {
  fill: currentColor;
  d: path("M17 2a1 1 0 0 1 .868 1.496L14.723 9H18a1.002 1.002 0 0 1 .707 1.707l-11 11a1 1 0 0 1-1.683-.924L7.753 13H6a1 1 0 0 1-.914-1.406l4-9C9.247 2.233 9.605 2 10 2Z");
}
</style><path class="i8z4sab7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-alt-fill-sharp"} {...others} />);
}

export default Component;
