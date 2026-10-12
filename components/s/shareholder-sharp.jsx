import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bpr3szoxk {
  d: path("M3.5 21.25h9.75v-.75c0-3.62-2.42-6.25-5.25-6.25s-5.25 2.63-5.25 6.25v.75zM14 10.5l3-3l2 2L21.25 7M18.5 5.25h2.75V8");
}

.l9kl1cbdj {
  cx: 8px;
  cy: 9px;
  r: 3px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="l9kl1cbdj"/><path class="bpr3szoxk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shareholder-sharp"} {...others} />);
}

export default Component;
