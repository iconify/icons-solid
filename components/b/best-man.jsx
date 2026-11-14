import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bmh1obbzc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 21.5V10l6-5.25M9 7l3 7.5L15 7m0-2.25L21 10v11.5M10.5 3.625l.6.45a1.5 1.5 0 0 0 1.8 0l.6-.45a.938.938 0 0 1 1.5.75v.75a.938.938 0 0 1-1.5.75l-.6-.45a1.5 1.5 0 0 0-1.8 0l-.6.45a.938.938 0 0 1-1.5-.75v-.75a.938.938 0 0 1 1.5-.75M12 18.5h.01");
}
</style><path class="bmh1obbzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:best-man"} {...others} />);
}

export default Component;
