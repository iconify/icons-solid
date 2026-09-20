import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jubx-fz_z {
  fill: currentColor;
  d: path("M3 22q-.425 0-.712-.288T2 21t.288-.712T3 20h4v-2q0-.425.288-.712T8 17h8q.425 0 .713.288T17 18v2h4q.425 0 .713.288T22 21t-.288.713T21 22zM8 7q-.425 0-.712-.288T7 6V4H3q-.425 0-.712-.288T2 3t.288-.712T3 2h18q.425 0 .713.288T22 3t-.288.713T21 4h-4v2q0 .425-.288.713T16 7z");
}
</style><path class="jubx-fz_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-space-between-outline-rounded"} {...others} />);
}

export default Component;
