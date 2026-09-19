import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.pm1ez0bic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.803 20.938H33.9s4.922 6.324 5.048 10.44c.118 3.818-1.713 8.821-5.728 11.122H14.78c-4.015-2.3-5.846-7.308-5.728-11.122c.126-4.119 5.048-10.44 5.048-10.44h10.097m-1.154-4.491l2.67-7.154C26.561 6.952 28.17 5.5 29.916 5.5h6.395");
}

.wchbghbcy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.1 20.938v-4.49h19.8v4.49");
}
</style><path class="pm1ez0bic"/><path class="wchbghbcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-mate-drink"} {...others} />);
}

export default Component;
