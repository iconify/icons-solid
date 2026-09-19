import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fk23nccrq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.014 30.435c3.553 0 6.42-2.882 6.42-6.449a6.41 6.41 0 0 0-6.42-6.42c-3.567 0-6.449 2.867-6.449 6.42a6.44 6.44 0 0 0 6.449 6.449M33.25 7.978L27.222 18.42m-6.438 11.151L14.75 40.022m26.634-22.349l-11.33 4.124m-12.1 4.404L6.616 30.327");
}

.le1rdibsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.04 42.5c10.215 0 18.46-8.285 18.46-18.54c0-10.215-8.245-18.46-18.46-18.46C13.785 5.5 5.5 13.745 5.5 23.96c0 10.255 8.285 18.54 18.54 18.54");
}
</style><path class="le1rdibsu"/><path class="fk23nccrq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-disk"} {...others} />);
}

export default Component;
