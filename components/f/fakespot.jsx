import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uuuprabso {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M44.404 17.226c3.57 10.75-1.816 22.428-12.31 26.692s-22.499-.346-27.44-10.54C-.29 23.187 3.526 10.907 13.374 5.309s22.351-2.594 28.581 6.867l-16.48 21.823l-11.511-6.646");
}
</style><path class="uuuprabso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fakespot"} {...others} />);
}

export default Component;
