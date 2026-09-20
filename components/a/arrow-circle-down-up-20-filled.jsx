import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lrhxrxcti {
  fill: currentColor;
  d: path("M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-5.793l-1.646 1.647a.5.5 0 0 1-.708 0L5 12.207a.5.5 0 1 1 .707-.707l.793.793V6.5a.5.5 0 0 1 1 0v5.793l.793-.793a.5.5 0 1 1 .707.707m6-4.414a.5.5 0 0 1-.707.707l-.793-.793V13.5a.5.5 0 0 1-1 0V7.707l-.793.793A.5.5 0 1 1 11 7.793l1.646-1.647a.5.5 0 0 1 .707 0z");
}
</style><path class="lrhxrxcti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-circle-down-up-20-filled"} {...others} />);
}

export default Component;
