import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h_eald1od {
  cx: 11.419px;
  cy: 36.588px;
  r: 5.912px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.o7b_zg4zt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m42.317 11.982l-6.205 23.156c-1.365 5.086-8.582 5.086-9.948 0l-2.44-9.101a2.5 2.5 0 0 0-1.767-1.768l-9.102-2.44c-5.087-1.366-5.087-8.583 0-9.949L36.01 5.675a5.15 5.15 0 0 1 6.306 6.306");
}
</style><circle class="h_eald1od"/><path class="o7b_zg4zt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shop-apotheke-redcare"} {...others} />);
}

export default Component;
