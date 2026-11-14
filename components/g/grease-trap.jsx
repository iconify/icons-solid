import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyoqm3b2y {
  d: path("M2.5 7H9v4m12.5-4H15v4m3 3.5s-3 3-3 4.25a3 3 0 0 0 6 0c0-1.25-3-4.25-3-4.25Z");
}

.w69s8qb5l {
  d: path("M12.9 16.5H6V3h12v7.6");
}
</style><g class="ulnmmdpxh"><path class="w69s8qb5l"/><path class="vyoqm3b2y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:grease-trap"} {...others} />);
}

export default Component;
