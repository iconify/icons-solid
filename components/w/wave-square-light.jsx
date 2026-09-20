import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.piayby0yj {
  fill: currentColor;
  d: path("M238 128v56a6 6 0 0 1-6 6H128a6 6 0 0 1-6-6V78H30v50a6 6 0 0 1-12 0V72a6 6 0 0 1 6-6h104a6 6 0 0 1 6 6v106h92v-50a6 6 0 0 1 12 0");
}
</style><path class="piayby0yj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wave-square-light"} {...others} />);
}

export default Component;
