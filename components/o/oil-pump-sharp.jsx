import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.le4p4ebtb {
  d: path("M7.5 5H2.75v8.5H7.5Zm0 3l13 2.5m-10 10.75L13 9l2.5 12.25m3.75-11V14m-14.5-.5v7.75m-2 0h18.5");
}

.qcb5jf56v {
  cx: 19.25px;
  cy: 16px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="le4p4ebtb"/><circle class="qcb5jf56v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:oil-pump-sharp"} {...others} />);
}

export default Component;
