import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6k9xpw6c {
  fill: currentColor;
  d: path("M21.625 18.75L19.8 16.925L20.8 7h-9.55L11 5h5V1h2v4h5zm-1.15 4.55L.675 3.5L2.1 2.075l19.8 19.8zM1 19v-2h15v2zm0 4v-2h15v2zM9.05 9.025v2q-.125 0-.275-.013T8.5 11q-1.475 0-2.787.5T3.675 13h9.35l2 2H1q0-3.025 2.338-4.512T8.5 9q.125 0 .275.013t.275.012M8.5 13");
}
</style><path class="w6k9xpw6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-food-outline-sharp"} {...others} />);
}

export default Component;
