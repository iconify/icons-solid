import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kjo4aac_r {
  fill: currentColor;
  d: path("M5.288 16.713Q5 16.425 5 16V8q0-.425.288-.712T6 7t.713.288T7 8v3h4V8q0-.425.288-.712T12 7t.713.288T13 8v8q0 .425-.288.713T12 17t-.712-.288T11 16v-3H7v3q0 .425-.288.713T6 17t-.712-.288m12 0Q17 16.426 17 16V9h-1q-.425 0-.712-.288T15 8t.288-.712T16 7h2q.425 0 .713.288T19 8v8q0 .425-.288.713T18 17t-.712-.288");
}
</style><path class="kjo4aac_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-h1-outline-rounded"} {...others} />);
}

export default Component;
