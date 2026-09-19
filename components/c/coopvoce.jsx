import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.je7ba1bsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5C21.989 19.145 19.145 21.989 2.5 24c16.645 2.011 19.537 4.917 21.5 21.5c2.011-16.645 4.855-19.489 21.5-21.5C28.855 21.989 26.011 19.145 24 2.5");
}
</style><path class="je7ba1bsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:coopvoce"} {...others} />);
}

export default Component;
