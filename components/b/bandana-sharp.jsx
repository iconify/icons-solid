import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blc3xecyi {
  d: path("M13.25 18.25c-2.75-1.25-3-5.25-.25-5.5c1.5-.1 2.25 1.75.75 2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xkbel2byj {
  d: path("M4.25 10h17l-.95 1.16l-7.35 8.93l-.95 1.16l-.95-1.16l-7.35-8.93L2.75 10zm6-5.75h3.5V7.5h-3.5zm0 1L7 3.25m6.75 2l3.25-2");
}
</style><g class="x2cwu0gfd"><path class="xkbel2byj"/><path class="blc3xecyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bandana-sharp"} {...others} />);
}

export default Component;
