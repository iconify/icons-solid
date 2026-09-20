import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.krnew_1uj {
  fill: currentColor;
  d: path("M4.255 6a7 7 0 1 1-1.242 3.568A.53.53 0 0 0 2.5 9a.474.474 0 0 0-.48.435q-.018.28-.02.565a8 8 0 1 0 1.5-4.665V3.5a.5.5 0 0 0-1 0v3A.5.5 0 0 0 3 7h3a.5.5 0 0 0 0-1zM8 7.751a1 1 0 0 1 1.49-.87l3.998 2.25a1 1 0 0 1 0 1.742l-3.997 2.25A1 1 0 0 1 8 12.254zm4.997 2.251L9 7.752v4.5z");
}
</style><path class="krnew_1uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:replay-20-regular"} {...others} />);
}

export default Component;
