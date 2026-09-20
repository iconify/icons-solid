import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.kne7fxbbu {
  fill: currentColor;
  d: path("M16 16h-5.5V8H18v6a2 2 0 0 1-2 2m2-9V6a2 2 0 0 0-2-2h-5.5v3zM9.5 7V4H4a2 2 0 0 0-2 2v1zM2 8v6a2 2 0 0 0 2 2h5.5V8z");
}
</style><path class="kne7fxbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:dual-screen-header-20-filled"} {...others} />);
}

export default Component;
