import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kwzravb1g {
  fill: currentColor;
  d: path("m255.31 188.75l-64-144A8 8 0 0 0 184 40H72a8 8 0 0 0-7.27 4.69a.2.2 0 0 0 0 .06v.12L.69 188.75A8 8 0 0 0 8 200h240a8 8 0 0 0 7.31-11.25M64 184H20.31L64 85.7Zm16 0V85.7l43.69 98.3Zm61.2 0L84.31 56h94.49l56.89 128Z");
}
</style><path class="kwzravb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tent"} {...others} />);
}

export default Component;
