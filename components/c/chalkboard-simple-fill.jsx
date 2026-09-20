import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tzszduaiz {
  fill: currentColor;
  d: path("M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Z");
}
</style><path class="tzszduaiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chalkboard-simple-fill"} {...others} />);
}

export default Component;
