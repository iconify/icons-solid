import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.imf6p331a {
  fill: currentColor;
  d: path("M16 20q-.425 0-.712-.288T15 19v-5q0-.425.288-.712T16 13h5q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20zm-4-9q-.425 0-.712-.288T11 10V5q0-.425.288-.712T12 4h9q.425 0 .713.288T22 5v5q0 .425-.288.713T21 11zm-9 9q-.425 0-.712-.288T2 19v-5q0-.425.288-.712T3 13h9q.425 0 .713.288T13 14v5q0 .425-.288.713T12 20zm0-9q-.425 0-.712-.288T2 10V5q0-.425.288-.712T3 4h5q.425 0 .713.288T9 5v5q0 .425-.288.713T8 11zm10-2h7V6h-7zm-9 9h7v-3H4zm13 0h3v-3h-3zM4 9h3V6H4zm3 0");
}
</style><path class="imf6p331a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dashboard-2-outline-rounded"} {...others} />);
}

export default Component;
