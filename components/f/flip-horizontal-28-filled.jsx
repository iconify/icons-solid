import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.jjzep_bok {
  fill: currentColor;
  d: path("M25.84 23.543A1 1 0 0 1 25 24h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1.912-.41l9 20a1 1 0 0 1-.072.953M17 7.66V22h6.453zM2.75 24a.75.75 0 0 1-.68-1.065l9.5-20.5A.75.75 0 0 1 13 2.75v20.5a.75.75 0 0 1-.75.75z");
}
</style><path class="jjzep_bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flip-horizontal-28-filled"} {...others} />);
}

export default Component;
