import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gtrx6bcwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 20.662c0-4.84-3.584-13.245-12.732-13.245s-13.845 7.231-13.845 13.836a11.99 11.99 0 0 1-12.423 12m0-12.453v19.783m13.845 0l-6.324-9.604");
}
</style><path class="gtrx6bcwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:kroger"} {...others} />);
}

export default Component;
