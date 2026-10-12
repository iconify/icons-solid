import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jfp291brm {
  d: path("M2.75 2.75h8v8h-8z");
}

.ozy1wf4nb {
  d: path("M16.5 2.75h4.75V7.5m-18.5 9v4.75H7.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}
</style><g class="x2cwu0gfd"><path class="jfp291brm"/><circle class="ygphxfbhc"/><path class="ozy1wf4nb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ungroup-objects-sharp"} {...others} />);
}

export default Component;
