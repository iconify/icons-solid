import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d3m1bwf4k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.786 8.679l-8.357 30.643H4.5l6.964-23.68zm4.178 0L43.5 15.643l-6.964 23.679H22.607z");
}
</style><path class="d3m1bwf4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:toom"} {...others} />);
}

export default Component;
