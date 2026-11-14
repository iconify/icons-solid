import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kmyxy_b1g {
  d: path("M3.5 5.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 5.75V21.5m0-8.5L17 17.5m-3.5-8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.ku5bixbjb {
  d: path("M13.75 8.5q3.25 2.5 6.5 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kmyxy_b1g"/><path class="ku5bixbjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:volleyball-dig"} {...others} />);
}

export default Component;
