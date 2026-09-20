import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v5furukpz {
  fill: currentColor;
  d: path("M14.058 16H4V8h16v2.058h-1V9H5v6h9.058zM5 15V9zm11.442 2.389l2.12-2.12l-2.12-2.119l.708-.708l2.12 2.12l2.119-2.12l.707.708l-2.113 2.12l2.113 2.119l-.707.707l-2.12-2.113l-2.119 2.113z");
}
</style><path class="v5furukpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:variable-remove-outline-sharp"} {...others} />);
}

export default Component;
