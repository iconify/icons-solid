import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.t-2wwo6vt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.77 8v17.23H5.5A17.26 17.26 0 0 1 22.77 8m0 0H40a17.27 17.27 0 0 1-17.23 17.23ZM5.5 25.23h17.27V42.5A17.26 17.26 0 0 1 5.5 25.23m34.52 0V42.5H22.76A17.27 17.27 0 0 1 40 25.23Zm2.48 0");
}
</style><path class="t-2wwo6vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cityzen"} {...others} />);
}

export default Component;
