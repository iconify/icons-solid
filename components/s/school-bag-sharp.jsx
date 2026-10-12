import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e7bzrde8j {
  d: path("M2.75 12.5v3h18.5v-3M7 15.5V18m10-2.5V18");
}

.q5sqg4bkt {
  d: path("M2.75 8.25h18.5v13H2.75zm2.25 0c0-3.75 3-5.5 7-5.5s7 1.75 7 5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="q5sqg4bkt"/><path class="e7bzrde8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:school-bag-sharp"} {...others} />);
}

export default Component;
