import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddolqmxza {
  fill: currentColor;
  d: path("M3 15q-.425 0-.712-.288T2 14t.288-.712T3 13h3q.425 0 .713.288T7 14t-.288.713T6 15zm7 0q-.425 0-.712-.288T9 14t.288-.712T10 13h3q.425 0 .713.288T14 14t-.288.713T13 15zm7 0q-.425 0-.712-.288T16 14t.288-.712T17 13h3q.425 0 .713.288T21 14t-.288.713T20 15zM3 11q-.425 0-.712-.288T2 10t.288-.712T3 9h17q.425 0 .713.288T21 10t-.288.713T20 11z");
}
</style><path class="ddolqmxza"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:power-input-rounded"} {...others} />);
}

export default Component;
