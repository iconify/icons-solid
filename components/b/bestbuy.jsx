import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gpt2vn8an {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.22 11.24L4.5 18.86v10.42l7.5 7.48h31.5V11.24ZM9.63 21.75a1.94 1.94 0 1 1-1.93 1.94h0a1.93 1.93 0 0 1 1.93-1.94");
}
</style><path class="gpt2vn8an"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bestbuy"} {...others} />);
}

export default Component;
