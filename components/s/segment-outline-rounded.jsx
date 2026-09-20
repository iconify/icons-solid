import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y3duoyxrk {
  fill: currentColor;
  d: path("M10 18q-.425 0-.712-.288T9 17t.288-.712T10 16h10q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T9 12t.288-.712T10 11h10q.425 0 .713.288T21 12t-.288.713T20 13zM4 8q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z");
}
</style><path class="y3duoyxrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:segment-outline-rounded"} {...others} />);
}

export default Component;
