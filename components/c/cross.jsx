import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wpeo26b2j {
  fill: currentColor;
  d: path("M200 72h-40V32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v40H56a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h40v88a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-88h40a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16m0 48h-48a8 8 0 0 0-8 8v96h-32v-96a8 8 0 0 0-8-8H56V88h48a8 8 0 0 0 8-8V32h32v48a8 8 0 0 0 8 8h48Z");
}
</style><path class="wpeo26b2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cross"} {...others} />);
}

export default Component;
