import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mm6h3achu {
  fill: currentColor;
  d: path("M14 15.5a8.5 8.5 0 1 1 8.5 8.5h-17a1.5 1.5 0 0 1 0-3h17a5.5 5.5 0 1 0-5.5-5.5a1.5 1.5 0 0 1-3 0m17.098 8.424A6.5 6.5 0 0 1 37.404 19h.096a6.5 6.5 0 1 1 0 13h-2.303a6 6 0 1 1-10.736 5.308l-.096-.231a1.5 1.5 0 1 1 2.77-1.154l.096.23A3 3 0 1 0 30 32H5.5a1.5 1.5 0 0 1 0-3h32a3.5 3.5 0 1 0 0-7h-.096a3.5 3.5 0 0 0-3.396 2.651l-.053.213a1.5 1.5 0 1 1-2.91-.728z");
}
</style><path class="mm6h3achu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:weather-squalls-48-filled"} {...others} />);
}

export default Component;
