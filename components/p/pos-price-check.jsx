import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ic3-py20j {
  d: path("M13.5 4v10.7");
}

.ko2aowwel {
  fill: currentColor;
  d: path("M3 4h1.5v13H3Z");
}

.nwdotdhzs {
  fill: currentColor;
  d: path("M15.5 12.5V4H17v8.4");
}

.u76j44bmb {
  fill: currentColor;
  d: path("M9 4h2v13H9Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yjkwfv9oj {
  d: path("M7 4v13");
}

.yv-080bxs {
  d: path("M2.5 9.5h19M14.25 18l2.5-2.75h5v5.5h-5ZM17 18h.01");
}
</style><g class="ulnmmdpxh"><path class="ko2aowwel"/><path class="yjkwfv9oj"/><path class="u76j44bmb"/><path class="ic3-py20j"/><path class="nwdotdhzs"/><path class="yv-080bxs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pos-price-check"} {...others} />);
}

export default Component;
