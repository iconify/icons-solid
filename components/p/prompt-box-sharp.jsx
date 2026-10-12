import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e408uacwa {
  d: path("M2.75 6.25h18.5v11.5H2.75z");
}

.ebrzzz9_q {
  d: path("M6.5 9.75L8.75 12L6.5 14.25m4.5 0h2.5m3.75-4.75v5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="e408uacwa"/><path class="ebrzzz9_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prompt-box-sharp"} {...others} />);
}

export default Component;
