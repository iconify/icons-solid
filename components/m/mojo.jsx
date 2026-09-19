import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kvqcm7bky {
  width: 7.611px;
  height: 18.33px;
  x: 33.212px;
  y: 14.835px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.806px;
  ry: 3.806px;
}

.lb0o4p8oz {
  width: 7.611px;
  height: 18.33px;
  x: 7.177px;
  y: 14.835px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.806px;
  ry: 3.806px;
}

.lwvtzxb4a {
  width: 7.611px;
  height: 18.33px;
  x: 20.194px;
  y: 14.835px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.806px;
  ry: 3.806px;
}
</style><rect transform="rotate(30 10.982 24)" class="lb0o4p8oz"/><rect transform="rotate(30 24 24)" class="lwvtzxb4a"/><rect transform="rotate(30 37.018 24)" class="kvqcm7bky"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mojo"} {...others} />);
}

export default Component;
