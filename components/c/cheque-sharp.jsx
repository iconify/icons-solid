import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.he8i02bwr {
  d: path("M2.75 5.75h18.5v12.5H2.75zm3.5 4h5.5m3.25 0h2.75m-11.5 4.5h3");
}

.q4_qghbet {
  d: path("m12.75 14.75l1.5-2l1.25 2l1.5-2l1.25 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="he8i02bwr"/><path class="q4_qghbet"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cheque-sharp"} {...others} />);
}

export default Component;
