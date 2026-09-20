import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqrqbdm_p {
  fill: currentColor;
  d: path("M5 23V1h14v22zm2-3v1h10v-1zM7 4h10V3H7zm5 12q-1.35 0-2.625.388T7 17.5v.5h10v-.5q-1.1-.725-2.375-1.112T12 16m0-2q1.35 0 2.613.313T17 15.2V6H7v9.2q1.125-.575 2.388-.887T12 14m2.125-1.875Q15 11.25 15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13t2.125-.875m-2.838-1.412Q11 10.425 11 10t.288-.712T12 9t.713.288T13 10t-.288.713T12 11t-.712-.288M12 18h5H7zm0 2");
}
</style><path class="iqrqbdm_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:remember-me-outline-sharp"} {...others} />);
}

export default Component;
