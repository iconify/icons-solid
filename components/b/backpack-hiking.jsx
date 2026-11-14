import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdxsy_2ye {
  d: path("M6.5 16V8q0-5 5.5-5t5.5 5v8M4 16h14.5a2.5 2.5 0 0 1 0 5H4");
}

.hsz_v6b9j {
  d: path("M2.5 18.5a1.5 2.5 0 1 0 3 0a1.5 2.5 0 1 0-3 0Zm4-10q5.5 2 11 0M9 16v5m6-5v5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cdxsy_2ye"/><path class="hsz_v6b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:backpack-hiking"} {...others} />);
}

export default Component;
