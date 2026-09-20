import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qbuzobpoq {
  fill: currentColor;
  d: path("M4 21q-.825 0-1.412-.587T2 19V3.6q0-.175.15-.238t.275.063l1.25 1.25l1.3-1.325q.15-.15.35-.15t.35.15L7 4.675L8.325 3.35q.15-.15.35-.15t.35.15l1.3 1.325L11.65 3.35q.15-.15.35-.15t.35.15l1.325 1.325l1.3-1.325q.15-.15.35-.15t.35.15L17 4.675l1.325-1.325q.15-.15.35-.15t.35.15l1.3 1.325l1.25-1.25q.125-.125.275-.062T22 3.6V19q0 .825-.588 1.413T20 21zm0-2h7v-6H4zm9 0h7v-2h-7zm0-4h7v-2h-7zm-9-4h16V8H4z");
}
</style><path class="qbuzobpoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:newspaper-rounded"} {...others} />);
}

export default Component;
