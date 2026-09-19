import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.o6igbtbgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.05 30.31h-2.81v7.13a5.61 5.61 0 0 1-11.13 0V24.82a5.61 5.61 0 0 1 5.61-5.61h8.41a5.61 5.61 0 0 1 0 11.13Zm14.56-14.37h-23a5.61 5.61 0 0 1-1.35-11.13a6.3 6.3 0 0 1 1.37 0h23m5.57 32.63a5.61 5.61 0 0 1-11.13 1.37a5.2 5.2 0 0 1 0-1.37V24.82a5.61 5.61 0 1 1 11.13-1.37a6.3 6.3 0 0 1 0 1.37Zm-5.61-21.5a5.57 5.57 0 1 1 5.57-5.56a5.57 5.57 0 0 1-5.57 5.56");
}
</style><path class="o6igbtbgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-fi"} {...others} />);
}

export default Component;
