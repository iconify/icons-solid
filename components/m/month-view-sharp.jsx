import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etxt20ith {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.38 17.63h.01");
}

.k06je5b4m {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25h17.5v17.5H3.25zm0 5h17.5m-8.75 0v12.5M3.25 14.5h17.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="k06je5b4m"/><path class="etxt20ith"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:month-view-sharp"} {...others} />);
}

export default Component;
