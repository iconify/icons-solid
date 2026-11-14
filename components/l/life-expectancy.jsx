import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hnksmlwfe {
  d: path("M2.5 3h11m-11 18h3.25q2.25-4 4.5 0h3.25");
}

.uh8ljnbrh {
  d: path("M4 3v2.5c0 3 4 4.5 4 6.5s-4 3.5-4 6.5V21m8-18v2.5c0 3-4 4.5-4 6.5s4 3.5 4 6.5V21m6 0l-2.75-2.75A2 2 0 0 1 18 15.5a2 2 0 0 1 2.75 2.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hnksmlwfe"/><path class="uh8ljnbrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:life-expectancy"} {...others} />);
}

export default Component;
