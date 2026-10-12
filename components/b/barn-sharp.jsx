import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cr_c2gbui {
  d: path("M3 20.45V11l.39-.7l1.72-3.1l.39-.7l.73-.34l5.04-2.32l.73-.34l.73.34l5.04 2.32l.73.34l.39.7l1.72 3.1l.39.7v10.25H3z");
}

.jbk3eiaid {
  cx: 12px;
  cy: 9.25px;
  r: 1.25px;
}

.l9xovubnl {
  d: path("M8.5 14h7v7.25h-7zm.75.75l5.5 5.75m0-5.75l-5.5 5.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cr_c2gbui"/><path class="l9xovubnl"/><circle class="jbk3eiaid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:barn-sharp"} {...others} />);
}

export default Component;
