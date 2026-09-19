import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gatpur-5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.73 8.32l-7.64 3l-2.78 6L19.2 23L8.55 26.26l.69 4.86l-4.74 3l2.2 1.38l19.67-2.19l-.37 3.36l10.41 3l6.83-6.13l.23-2.09l-8.45 2.77Z");
}
</style><path class="gatpur-5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:covidalertny"} {...others} />);
}

export default Component;
