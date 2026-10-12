import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jo45v1frk {
  cx: 19px;
  cy: 5px;
  r: 2.25px;
}

.rw6s5dbin {
  d: path("M2.75 5.75h15.5v12.5H2.75zm3.5 4.5h8.5m-8.5 3.5h4m2 0h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rw6s5dbin"/><circle class="jo45v1frk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:caption-live-sharp"} {...others} />);
}

export default Component;
