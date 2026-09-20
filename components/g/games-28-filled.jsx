import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.u0077cc2j {
  fill: currentColor;
  d: path("M10.5 5.5a8.5 8.5 0 0 0 0 17h7a8.5 8.5 0 1 0 0-17zm7.5 11a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m1.5-2.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-14-.25a.75.75 0 0 1 .75-.75H8v-1.75a.75.75 0 0 1 1.5 0V13h1.75a.75.75 0 0 1 0 1.5H9.5v1.75a.75.75 0 1 1-1.5 0V14.5H6.25a.75.75 0 0 1-.75-.75");
}
</style><path class="u0077cc2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:games-28-filled"} {...others} />);
}

export default Component;
