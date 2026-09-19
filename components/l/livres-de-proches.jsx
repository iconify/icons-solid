import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cjx2_rb_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 41.676c-1.47-3.758-8.439-10.139-18.5-9.317V6.396c10.061-.822 17.03 5.559 18.5 9.317m0 25.963c1.47-3.758 8.439-10.139 18.5-9.317V6.396c-10.061-.822-17.03 5.559-18.5 9.317m0 0v25.963");
}
</style><path class="cjx2_rb_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:livres-de-proches"} {...others} />);
}

export default Component;
