import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nkte53v-k {
  d: path("M10 12V3h2.5v7h4.25v6a5.25 5.25 0 0 1-5.25 5.25h-5V12h2Zm2.5-1.5v3");
}

.t425h_b9i {
  d: path("m7 15.5l2.8-.8l2.45 1.05");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nkte53v-k"/><path class="t425h_b9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:point-up-sharp"} {...others} />);
}

export default Component;
