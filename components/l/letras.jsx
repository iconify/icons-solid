import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.edd4hqb4e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.989 18.074L21.279 5.5l7.979 10.26l12.977-.753l-7.29 10.76l4.733 12.107l-12.49-3.608L17.13 42.5l-.425-12.988l-10.94-7.014z");
}
</style><path class="edd4hqb4e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:letras"} {...others} />);
}

export default Component;
