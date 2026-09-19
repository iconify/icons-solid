import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a5rjb3bax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.917 24H7.834l-4.041 7l4.041 7h8.083l4.042-7zm24.249 0h-8.083l-4.042 7l4.042 7h8.083l4.041-7z");
}

.av-rq91pj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.041 3h-8.082l-4.042 7l4.042 7h8.082l4.042-7zm0 28h-8.082l-4.042 7l4.042 7h8.082l4.042-7z");
}

.jtleoccyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.917 10H7.834l-4.041 7l4.041 7h8.083l4.042-7zm24.249 0h-8.083l-4.042 7l4.042 7h8.083l4.041-7z");
}

.kub116bva {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.041 17h-8.082l-4.042 7l4.042 7h8.082l4.042-7z");
}
</style><path class="av-rq91pj"/><path class="jtleoccyh"/><path class="kub116bva"/><path class="a5rjb3bax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:color-slide"} {...others} />);
}

export default Component;
