import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhvuz1bim {
  d: path("m17.53 3.28l3.19 3.19l.53.53l-.53.53l-3.19 3.19l-.53.53l-.53-.53l-3.19-3.19l-.53-.53l.53-.53l3.19-3.19l.53-.53zM17 11.25c0 3-4 3-8 5");
}

.t9sqlg7hc {
  cx: 6.25px;
  cy: 10.75px;
  r: 2.25px;
}

.v6qhv1bxz {
  d: path("M3 21.25v-2.5a3.25 3.25 0 0 1 6.5 0v2.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lhvuz1bim"/><circle class="t9sqlg7hc"/><path class="v6qhv1bxz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kite-kids-sharp"} {...others} />);
}

export default Component;
