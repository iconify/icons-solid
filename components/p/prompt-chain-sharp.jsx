import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.guc4fjbhq {
  d: path("M2.75 3.25h11v6.5h-11z");
}

.o2x6yybsc {
  d: path("m5.75 5l1.5 1.5L5.75 8m2.5 1.75v7.5h2m0-3h11v6.5h-11z");
}

.oxw7akivi {
  d: path("m13.25 16l1.5 1.5l-1.5 1.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="guc4fjbhq"/><path class="o2x6yybsc"/><path class="oxw7akivi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prompt-chain-sharp"} {...others} />);
}

export default Component;
