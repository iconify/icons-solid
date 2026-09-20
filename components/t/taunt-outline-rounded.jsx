import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d9aakq9vs {
  fill: currentColor;
  d: path("M5.45 14.475q-.6.325-1.275.138T3.15 13.85q-.425-.725-.15-1.5t1.075-1.05L11.7 8.775q.35-.125.688.038t.562.587q.2.35.063.738t-.488.587zM8 21q-.825 0-1.412-.587T6 19v-3.675l7.875-4.15q.35-.2.475-.587t-.05-.738l4.825-2.4q.375-.2.763-.038t.637.663q.175.325.088.675t-.363.55L14 14v5q0 .825-.587 1.413T12 21zM5.025 8.975Q4 7.95 4 6.5t1.025-2.475T7.5 3t2.475 1.025T11 6.5T9.975 8.975T7.5 10T5.025 8.975");
}
</style><path class="d9aakq9vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:taunt-outline-rounded"} {...others} />);
}

export default Component;
