import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rbma3txyv {
  fill: currentColor;
  d: path("M4 22V2h16v20zm4-4h8v-2H8zm4-4q1.65 0 2.825-1.175T16 10t-1.175-2.825T12 6T9.175 7.175T8 10t1.175 2.825T12 14m0-3q-.425 0-.712-.288T11 10t.288-.712T12 9t.713.288T13 10t-.288.713T12 11");
}
</style><path class="rbma3txyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hard-disk-sharp"} {...others} />);
}

export default Component;
