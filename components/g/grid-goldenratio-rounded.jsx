import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebepk12xa {
  fill: currentColor;
  d: path("M9 15H3q-.425 0-.712-.288T2 14t.288-.712T3 13h6v-2H3q-.425 0-.712-.288T2 10t.288-.712T3 9h6V3q0-.425.288-.712T10 2t.713.288T11 3v6h2V3q0-.425.288-.712T14 2t.713.288T15 3v6h6q.425 0 .713.288T22 10t-.288.713T21 11h-6v2h6q.425 0 .713.288T22 14t-.288.713T21 15h-6v6q0 .425-.288.713T14 22t-.712-.288T13 21v-6h-2v6q0 .425-.288.713T10 22t-.712-.288T9 21zm2-2h2v-2h-2z");
}
</style><path class="ebepk12xa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:grid-goldenratio-rounded"} {...others} />);
}

export default Component;
