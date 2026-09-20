import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nb7en1f4g {
  fill: currentColor;
  d: path("M6 19v1q0 .425-.288.713T5 21t-.712-.288T4 20V4q0-.425.288-.712T5 3t.713.288T6 4v1h2V4q0-.425.288-.712T9 3h6q.425 0 .713.288T16 4v1h2V4q0-.425.288-.712T19 3t.713.288T20 4v16q0 .425-.288.713T19 21t-.712-.288T18 20v-1h-2v1q0 .425-.288.713T15 21H9q-.425 0-.712-.288T8 20v-1zm0-2h2v-2H6zm0-4h2v-2H6zm0-4h2V7H6zm10 8h2v-2h-2zm0-4h2v-2h-2zm0-4h2V7h-2zm-6 10h4V5h-4zm0-14h4z");
}
</style><path class="nb7en1f4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:theaters-outline-rounded"} {...others} />);
}

export default Component;
