import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.io9cw4boy {
  fill: currentColor;
  d: path("M248 80v24a8 8 0 0 1-16 0V88h-98.45L87.49 210.81a8 8 0 0 1-15 0l-48-128a8 8 0 1 1 15-5.62L80 185.22l40.51-108A8 8 0 0 1 128 72h112a8 8 0 0 1 8 8");
}
</style><path class="io9cw4boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:radical"} {...others} />);
}

export default Component;
