import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7cvvibhb {
  fill: currentColor;
  d: path("M6 22q-1.25 0-2.125-.875T3 19V5q0-1.25.875-2.125T6 2h11v16H6q-.425 0-.712.288T5 19t.288.713T6 20h13V4h2v18zm3-6h6V4H9zm-2 0V4H6q-.425 0-.712.288T5 5v11.175q.25-.075.488-.125T6 16zM5 4v12.175z");
}
</style><path class="l7cvvibhb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:book-4-outline-sharp"} {...others} />);
}

export default Component;
