import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi8hwbbyz {
  fill: currentColor;
  d: path("M3.288 20.713Q3 20.425 3 20v-4q0-.425.288-.712T4 15t.713.288T5 16v4q0 .425-.288.713T4 21t-.712-.288M7 19q-.425 0-.712-.288T6 18t.288-.712T7 17h4q.425 0 .713-.288T12 16v-3H7q-.5 0-.8-.387t-.15-.888l2.4-8q.1-.325.35-.525t.6-.2h7.2q.35 0 .6.2t.35.525l2.4 8q.15.5-.15.888T19 13h-5v3q0 1.25-.875 2.125T11 19z");
}
</style><path class="bi8hwbbyz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wall-lamp-rounded"} {...others} />);
}

export default Component;
