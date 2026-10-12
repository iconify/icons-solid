import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f-9e4rrar {
  d: path("M2.75 20.75h18.5");
}

.jgdawjjhh {
  cx: 17px;
  cy: 18px;
  r: 1.25px;
}

.lsh48acyg {
  cx: 7px;
  cy: 18px;
  r: 1.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xwrz_zqwa {
  d: path("m8 6.75l2-2.5h4M2.75 6.75h18.5v10H2.75zm2.75 3h3m2.25 0h2.5m2.25 0h3m-15.75 3.5h18.5");
}
</style><g class="x2cwu0gfd"><path class="xwrz_zqwa"/><circle class="lsh48acyg"/><circle class="jgdawjjhh"/><path class="f-9e4rrar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:metro-train-sharp"} {...others} />);
}

export default Component;
