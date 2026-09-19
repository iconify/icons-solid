import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ru68ukbvs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 22.357h37m-37-5.619h37m-37-5.619h37m-31 25.476v-8.619h31V42.5H30.619v-3.786c0-3.103-2.016-5.119-5.119-5.119s-5.119 2.016-5.119 5.12V42.5H5.5v-37h37");
}
</style><path class="ru68ukbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:changyin-consumer-finance"} {...others} />);
}

export default Component;
