import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zuajlq8_a {
  fill: currentColor;
  d: path("M98 148a22 22 0 0 0-22-22a6 6 0 0 1-4.92-9.44L92.48 86H56a6 6 0 0 1 0-12h48a6 6 0 0 1 4.92 9.44l-22.53 32.18a34 34 0 1 1-34.68 56.17a6 6 0 0 1 8.58-8.39A22 22 0 0 0 98 148m62-74a54 54 0 0 1 0 108h-24a6 6 0 0 1-6-6V80a6 6 0 0 1 6-6Zm0 12h-18v84h18a42 42 0 0 0 0-84M32 54h192a6 6 0 0 0 0-12H32a6 6 0 0 0 0 12m192 148H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12");
}
</style><path class="zuajlq8_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:three-d-light"} {...others} />);
}

export default Component;
