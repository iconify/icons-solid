import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pgmy6pbwn {
  d: path("M14.1 15.5H2.5V3h19v8.7m-16-5.45H12m-6.5 3H12m-6.5 3H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uqb-5u8fr {
  d: path("M15.25 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm6.5 8.75a2.5 2.5 0 1 1-2-2M17.5 18.5L15 21");
}
</style><g class="ulnmmdpxh"><path class="pgmy6pbwn"/><path class="uqb-5u8fr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ac-repair"} {...others} />);
}

export default Component;
