import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3fy_gb8f {
  fill: currentColor;
  d: path("M9 8v6.586l3.293-3.293a.999.999 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a.999.999 0 1 1 1.414-1.414L7 14.586V7a1 1 0 0 1 1-1h13a1 1 0 0 1 0 2Z");
}
</style><path class="c3fy_gb8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-turn-left-down-fill-sharp"} {...others} />);
}

export default Component;
