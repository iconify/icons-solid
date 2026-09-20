import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sfvy-y8qw {
  fill: currentColor;
  d: path("M4.288 19.713Q4 19.425 4 19V5q0-.425.288-.712T5 4t.713.288T6 5v14q0 .425-.288.713T5 20t-.712-.288m14 0Q18 19.426 18 19v-6H9q-.425 0-.712-.288T8 12t.288-.712T9 11h9V5q0-.425.288-.712T19 4t.713.288T20 5v14q0 .425-.288.713T19 20t-.712-.288");
}
</style><path class="sfvy-y8qw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-text-clip-rounded"} {...others} />);
}

export default Component;
