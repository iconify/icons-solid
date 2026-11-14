import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pwhcdibro {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v2M7 10l2.5-5.5h5L17 10Zm7 0a2 2 0 0 1-4 0m-7.5 8.25c3-.25 5-2.5 8-2.5H16c2.5 0 4 .75 5.5 1.75c-1.5 1-3 1.5-5.5 1.5h-5.5c-2.5 0-4.5-.5-8-.75m8 .75l-.75 2M16 19l.75 2");
}
</style><path class="pwhcdibro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heat-lamp-reptile"} {...others} />);
}

export default Component;
