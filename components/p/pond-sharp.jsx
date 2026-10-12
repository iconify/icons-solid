import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o_49tf26r {
  d: path("M9.5 18.25L12 19.5l2.5-1.25m-8-3.76v-2.75l-1.25-2.5m4.25 4.65V8m7 6.22v-3.75l1.5-3M8.25 3h2.5v5h-2.5z");
}

.v9q4yubzo {
  d: path("M2.75 17.5a9.25 3.75 0 1 0 18.5 0a9.25 3.75 0 1 0-18.5 0Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="v9q4yubzo"/><path class="o_49tf26r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pond-sharp"} {...others} />);
}

export default Component;
