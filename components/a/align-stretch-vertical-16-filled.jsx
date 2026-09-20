import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.x3o7nzbvg {
  fill: currentColor;
  d: path("M1.5 13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0-11a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm3 10A1.5 1.5 0 0 1 3 10.5v-5A1.5 1.5 0 0 1 4.5 4h1A1.5 1.5 0 0 1 7 5.5v5A1.5 1.5 0 0 1 5.5 12zM9 10.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 4h-1A1.5 1.5 0 0 0 9 5.5z");
}
</style><path class="x3o7nzbvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:align-stretch-vertical-16-filled"} {...others} />);
}

export default Component;
