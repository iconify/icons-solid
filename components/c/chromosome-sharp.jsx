import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aekjv2byg {
  d: path("M5.25 5a1.75 1.75 0 0 1 3.4-.6c.9 2.9 1.6 4.85 1.6 7.6s-.7 4.7-1.6 7.6a1.75 1.75 0 0 1-3.4-.6C6 16.4 6.5 14.85 6.5 12S6 7.6 5.25 5Zm13.5 0a1.75 1.75 0 0 0-3.4-.6c-.9 2.9-1.6 4.85-1.6 7.6s.7 4.7 1.6 7.6a1.75 1.75 0 0 0 3.4-.6c-.75-2.6-1.25-4.15-1.25-7s.5-4.4 1.25-7Z");
}

.httv1niad {
  d: path("M8.75 10.75h6.5v2.5h-6.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="aekjv2byg"/><path class="httv1niad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:chromosome-sharp"} {...others} />);
}

export default Component;
