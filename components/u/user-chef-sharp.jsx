import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6vuywbjz {
  cx: 12px;
  cy: 12.75px;
  r: 2px;
}

.o5rdnfbgn {
  d: path("M6.5 21h11.75v-.75C18.25 18.4 15.44 17 12 17s-6.25 1.4-6.25 3.25V21zM8.75 8.5v-1A2 2 0 0 1 10 3.85a2.5 2.5 0 0 1 4 0a2 2 0 0 1 1.25 3.65v1Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="m6vuywbjz"/><path class="o5rdnfbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:user-chef-sharp"} {...others} />);
}

export default Component;
