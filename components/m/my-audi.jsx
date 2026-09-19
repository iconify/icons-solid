import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.lll6-hb1v {
  cx: 9.567px;
  cy: 24px;
  r: 6.067px;
}

.me4908fpw {
  cx: 19.189px;
  cy: 24px;
  r: 6.067px;
}

.qp0u_zz-s {
  cx: 38.433px;
  cy: 24px;
  r: 6.067px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zxm6skb7y {
  cx: 28.811px;
  cy: 24px;
  r: 6.067px;
}
</style><g class="y9tr6bcfx"><circle class="lll6-hb1v"/><circle class="me4908fpw"/><circle class="zxm6skb7y"/><circle class="qp0u_zz-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:my-audi"} {...others} />);
}

export default Component;
