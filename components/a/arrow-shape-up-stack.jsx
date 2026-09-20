import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ch9wtc8lo {
  fill: currentColor;
  d: path("M9 20v-3H4l8-9l8 9h-5v3zm-5-8l8-9l8 9h-2.675L12 6l-5.325 6z");
}
</style><path class="ch9wtc8lo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-shape-up-stack"} {...others} />);
}

export default Component;
