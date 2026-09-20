import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s37j0cesz {
  fill: currentColor;
  d: path("M208 196H71.59l29.09-32H152a60 60 0 0 0 42.07-102.73L211 42.69a4 4 0 0 0-6-5.38L188 56a59.73 59.73 0 0 0-36-12H56a4 4 0 0 0 0 8h96a51.75 51.75 0 0 1 30.6 10l-85.46 94H56a4 4 0 0 0 0 8h33.87L45 213.31a4 4 0 1 0 6 5.38L64.31 204H208a4 4 0 0 0 0-8M188.69 67.19A52 52 0 0 1 152 156h-44Z");
}
</style><path class="s37j0cesz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:not-superset-of-thin"} {...others} />);
}

export default Component;
