import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mftiunbqq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30 18H18v12h12zm12.5 3V9.5a4 4 0 0 0-4-4H27m-6 0H9.5a4 4 0 0 0-4 4V21m0 6v11.5a4 4 0 0 0 4 4H21m6 0h11.5a4 4 0 0 0 4-4V27");
}
</style><path class="mftiunbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hdfc-bank"} {...others} />);
}

export default Component;
