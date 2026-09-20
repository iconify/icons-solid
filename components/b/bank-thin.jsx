import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rfvd3nbrn {
  fill: currentColor;
  d: path("M24 100h28v72H32a4 4 0 0 0 0 8h192a4 4 0 0 0 0-8h-20v-72h28a4 4 0 0 0 2.1-7.41l-104-64a4 4 0 0 0-4.2 0l-104 64A4 4 0 0 0 24 100m36 0h40v72H60Zm88 0v72h-40v-72Zm48 72h-40v-72h40ZM128 36.7L217.87 92H38.13ZM244 208a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h224a4 4 0 0 1 4 4");
}
</style><path class="rfvd3nbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:bank-thin"} {...others} />);
}

export default Component;
