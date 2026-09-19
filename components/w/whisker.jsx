import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cln7yqpkb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.687 9.723l-13.5-.7c-9.9-.5-16.1 10.3-10.5 18.3l4.1 5.8c5.2 7.3 16 7.9 22 1.2l5.9-6.6c6.1-6.9 1.4-17.6-7.9-18z");
}

.p_r9ze4jw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.887 19.023l-2.5 10l-2.5-10l-2.5 10l-2.5-10");
}
</style><path class="p_r9ze4jw"/><path class="cln7yqpkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:whisker"} {...others} />);
}

export default Component;
