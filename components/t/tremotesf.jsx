import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ltgnblbty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.687 5.5h6.626v23.746h4.97L24 36.978l-8.284-7.732h4.97Z");
}

.qy4iinbsy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.687 7.709H9.09a2.485 2.485 0 0 0-2.209 2.209v4.97a2.485 2.485 0 0 0 2.209 2.209h11.597m6.626 0H38.91a2.485 2.485 0 0 0 2.209-2.209v-4.97A2.485 2.485 0 0 0 38.91 7.71H27.313");
}

.zgefe1_jv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.687 22.62h-9.94a2.485 2.485 0 0 0-2.21 2.208v15.463a2.485 2.485 0 0 0 2.21 2.209h26.507a2.485 2.485 0 0 0 2.209-2.209V24.828a2.485 2.485 0 0 0-2.21-2.209h-9.94");
}
</style><path class="qy4iinbsy"/><path class="ltgnblbty"/><path class="zgefe1_jv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tremotesf"} {...others} />);
}

export default Component;
