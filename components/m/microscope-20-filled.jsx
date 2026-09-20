import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.kftiphwwg {
  fill: currentColor;
  d: path("M7 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V3h.5a.5.5 0 0 1 .5.5v1.53a.5.5 0 0 1 .11-.001A6.5 6.5 0 0 1 13.965 17H16.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1h7A5.5 5.5 0 0 0 11 6.022V11.5a.5.5 0 0 1-.5.5H10v.5a1.5 1.5 0 0 1-3 0V12h-.5a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5H7zM8 12v.5a.5.5 0 0 0 1 0V12zm-2.5 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="kftiphwwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:microscope-20-filled"} {...others} />);
}

export default Component;
