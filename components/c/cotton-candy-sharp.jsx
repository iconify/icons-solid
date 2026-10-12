import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anc7wbbys {
  d: path("M6.75 12.25a2.5 2.5 0 0 1-.5-4.9A3 3 0 0 1 10.75 5a3.25 3.25 0 0 1 5.5 1.25a3 3 0 0 1 1.25 6Z");
}

.kvco7dbxp {
  d: path("M9 9.5L12 7l3 2.5m-3 2.75v9");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="anc7wbbys"/><path class="kvco7dbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cotton-candy-sharp"} {...others} />);
}

export default Component;
