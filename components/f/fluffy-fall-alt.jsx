import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i8vvkrble {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.741 22.84c.477 2.209 1.685 2.962 3.259 2.962s2.782-.753 3.259-2.962m6.783-.642H44.5m-41 0h10.458");
}
</style><path class="i8vvkrble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fluffy-fall-alt"} {...others} />);
}

export default Component;
