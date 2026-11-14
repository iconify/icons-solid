import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2nco1b4d {
  d: path("M2.5 20.5V13L9 9.5V13l6.25-3.5V13l6.25-3.5v11Z");
}

.g5rmg3biz {
  d: path("M6 11.25V3.5h3v6m3.25 1.75V5.5h3v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c2nco1b4d"/><path class="g5rmg3biz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:factory-large"} {...others} />);
}

export default Component;
