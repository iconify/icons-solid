import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.inktik0hu {
  fill: currentColor;
  d: path("M10.05 7.65L13 10.575V8.35h2V14H9.35v-2h2.25L8.65 9.05zM19 20q-1.25 0-2.125-.875T16 17t.875-2.125T19 14t2.125.875T22 17t-.875 2.125T19 20M2 20V4h20v8h-2V6H4v12h10v2z");
}
</style><path class="inktik0hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bubbles-sharp"} {...others} />);
}

export default Component;
