import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c-57l15ag {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.646 25.904H40.18a2.32 2.32 0 0 0 2.319-2.32V11.413h-37v12.173a2.32 2.32 0 0 0 2.319 2.32h12.068m.647-14.494V6.488h7.981v4.924");
}

.enkt40bgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.159 24.796v16.716H5.883v-16.65");
}

.wos80d_zl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.31 24.09h7.98v4.506h-7.98z");
}
</style><path class="c-57l15ag"/><path class="enkt40bgf"/><path class="wos80d_zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-briefcase"} {...others} />);
}

export default Component;
