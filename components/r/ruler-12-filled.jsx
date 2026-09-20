import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.j-emdtelb {
  fill: currentColor;
  d: path("M7.5 1A1.5 1.5 0 0 1 9 2.5v7A1.5 1.5 0 0 1 7.5 11h-3A1.5 1.5 0 0 1 3 9.5v-7A1.5 1.5 0 0 1 4.5 1zM4 9h1.5a.5.5 0 0 0 0-1H4zm0-2.5h2.5a.5.5 0 0 0 0-1H4zM4 4h1.5a.5.5 0 0 0 0-1H4z");
}
</style><path class="j-emdtelb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:ruler-12-filled"} {...others} />);
}

export default Component;
