import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ap407vyjn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43 25.42L31.06 40.13H18.12a.56.56 0 0 1-.44-.92L30 24L16.94 7.87h14.12L43 22.58a2.26 2.26 0 0 1 0 2.84");
}

.mnorxrhlo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 16.58L18 24l2.95 3.64a1.12 1.12 0 0 1 0 1.42l-6 7.46a.56.56 0 0 1-.87 0L5 25.42a2.26 2.26 0 0 1 0-2.84L16.94 7.87");
}
</style><path class="ap407vyjn"/><path class="mnorxrhlo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:microsoftlauncher"} {...others} />);
}

export default Component;
