import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.jgzo8i0ql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.49 29.01C38.49 18.36 24 4.5 24 4.5S9.51 18.36 9.51 29.01c0 8.003 6.488 14.49 14.49 14.49s14.49-6.487 14.49-14.49");
}
</style><path class="jgzo8i0ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:waterminder"} {...others} />);
}

export default Component;
