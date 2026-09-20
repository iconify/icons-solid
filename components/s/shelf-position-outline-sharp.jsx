import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0v5varzx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-3.5H5zm11.116-4.5H19V5h-2.884zM5 14.5h2.885V5H5zm3.885 0h6.23V5h-6.23z");
}
</style><path class="u0v5varzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:shelf-position-outline-sharp"} {...others} />);
}

export default Component;
