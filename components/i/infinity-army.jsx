import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n33v6cbrk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6 39.696L23.913 8.304L42 39.696l-14.609-4.087l-.174-5.13l4.957 1.651l-8.261-14.608l-8 14.26l4.783-1.304l-.087 5.13z");
}
</style><path class="n33v6cbrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:infinity-army"} {...others} />);
}

export default Component;
