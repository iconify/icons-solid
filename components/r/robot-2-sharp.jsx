import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r629hqk2n {
  fill: currentColor;
  d: path("M4 21v-7h16v7zm5-8q-2.075 0-3.537-1.463T4 8t1.463-3.537T9 3h6q2.075 0 3.538 1.463T20 8t-1.463 3.538T15 13zm.713-4.288Q10 8.425 10 8t-.288-.712T9 7t-.712.288T8 8t.288.713T9 9t.713-.288m6 0Q16 8.426 16 8t-.288-.712T15 7t-.712.288T14 8t.288.713T15 9t.713-.288");
}
</style><path class="r629hqk2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:robot-2-sharp"} {...others} />);
}

export default Component;
