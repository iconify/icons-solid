import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w_o5ddb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 41.41h39M24 6.59v34.82m14.58-31.12V27a2.11 2.11 0 0 1-2.11 2.11H11.53A2.11 2.11 0 0 1 9.42 27V10.29");
}
</style><path class="w_o5ddb9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:trime"} {...others} />);
}

export default Component;
