import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pkfaybc1g {
  d: path("M8.5 11.5h12.75l-.7 1.32l-2.85 5.36l-.7 1.32H2.75l.7-1.32l2.85-5.36l.7-1.32zm3.25 0l-4.25 8m9-8l-4.25 8");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ycdjlfbmq {
  cx: 6.5px;
  cy: 5.75px;
  r: 2.25px;
}
</style><g class="x2cwu0gfd"><circle class="ycdjlfbmq"/><path class="pkfaybc1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:beach-towel-sharp"} {...others} />);
}

export default Component;
