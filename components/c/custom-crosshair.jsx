import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xcil6cm3h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.019 45.129a21.5 21.5 0 0 1-17.148-17.15m42.256.001a21.5 21.5 0 0 1-17.143 17.147m-.006-42.255a21.5 21.5 0 0 1 17.151 17.156m-42.257-.013a21.5 21.5 0 0 1 17.15-17.143");
}
</style><path class="xcil6cm3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:custom-crosshair"} {...others} />);
}

export default Component;
