import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ukes7hl0q {
  fill: currentColor;
  d: path("m2.051 20.684l6-18a1.001 1.001 0 0 1 1.898.632l-6 18a1.001 1.001 0 0 1-1.898-.632m18 .632l-6-18a1.001 1.001 0 0 1 1.898-.632l6 18a1.001 1.001 0 0 1-1.898.632M13 7v2a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0m0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0m0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0");
}
</style><path class="ukes7hl0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:road-fill-round"} {...others} />);
}

export default Component;
