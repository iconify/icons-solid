import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xlhpyhbml {
  fill: currentColor;
  d: path("M3.293 17.707a.999.999 0 1 1 1.414-1.414L6 17.586V4a1 1 0 0 1 2 0v13.586l1.293-1.293a.999.999 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0ZM14 3h6a1.002 1.002 0 0 1 .707 1.707L16.414 9H20a1 1 0 0 1 0 2h-6a1.002 1.002 0 0 1-.707-1.707L17.586 5H14a1 1 0 0 1 0-2m-1 17v-3a4 4 0 0 1 8 0v3a1 1 0 0 1-2 0v-1h-4v1a1 1 0 0 1-2 0m2-3h4a2 2 0 1 0-4 0");
}
</style><path class="xlhpyhbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sort-z-a-fill"} {...others} />);
}

export default Component;
