import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.amsl5jz7h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.633 15.64v-2.816a8.366 8.366 0 0 1 16.732 0v2.815");
}

.z7ob1ybpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5.815 15.64l2.056 20.267a8.445 8.445 0 0 0 8.402 7.593h15.454a8.445 8.445 0 0 0 8.402-7.593l2.056-20.268z");
}
</style><path class="z7ob1ybpa"/><path class="amsl5jz7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:samsung-galaxy-shop"} {...others} />);
}

export default Component;
