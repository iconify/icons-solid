import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4tbcbbac {
  cx: 11px;
  cy: 5.25px;
  r: 2.5px;
}

.u-2eaqa5y {
  d: path("m5.1 20.51l1.3-9.77l.1-.74h4l.1.74l1.3 9.77l.1.74H5zM6.25 14h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yssow-b-l {
  cx: 18.5px;
  cy: 5px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="u-2eaqa5y"/><circle class="n4tbcbbac"/><circle class="yssow-b-l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:emissions-stack-sharp"} {...others} />);
}

export default Component;
