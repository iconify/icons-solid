import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eytqbacqa {
  d: path("m12 2.25l2 1.5l2.5.5l.5 2.5l1.5 2l-1.5 2l-.5 2.5l-2.5.5l-2 1.5l-2-1.5l-2.5-.5l-.5-2.5l-1.5-2l1.5-2l.5-2.5l2.5-.5Z");
}

.jiigpebhi {
  d: path("M9.5 8.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2 4.5L6 21l2.5-1.25l2 1.25l-.5-7.25m6.5-.5L18 21l-2.5-1.25l-2 1.25l.5-7.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eytqbacqa"/><path class="jiigpebhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rosette-ribbon"} {...others} />);
}

export default Component;
