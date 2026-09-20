import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.p5bzn-b9g {
  fill: currentColor;
  d: path("M192 140H64a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8m40-56H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8m-104 96h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m90.83-6.83a4 4 0 0 0-5.66 0L192 194.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L186.34 200l-21.17 21.17a4 4 0 0 0 5.66 5.66L192 205.66l21.17 21.17a4 4 0 0 0 5.66-5.66L197.66 200l21.17-21.17a4 4 0 0 0 0-5.66");
}
</style><path class="p5bzn-b9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:funnel-simple-x-thin"} {...others} />);
}

export default Component;
