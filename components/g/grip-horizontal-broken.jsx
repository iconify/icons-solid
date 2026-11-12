import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f3sty6bdo {
  cx: 19px;
  cy: 8.488px;
  r: 0.75px;
}

.hzbwlrnku {
  cx: 5px;
  cy: 8.504px;
  r: 0.75px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lekigjbvy {
  cx: 19px;
  cy: 15.496px;
  r: 0.75px;
}

.mqy674b1p {
  cx: 12px;
  cy: 8.504px;
  r: 0.75px;
}

.xnbezkb7w {
  cx: 12px;
  cy: 15.512px;
  r: 0.75px;
}

.zo874nbdq {
  cx: 5px;
  cy: 15.512px;
  r: 0.75px;
}
</style><g class="ipq1z-bjh"><circle class="zo874nbdq"/><circle class="xnbezkb7w"/><circle class="lekigjbvy"/><circle class="hzbwlrnku"/><circle class="mqy674b1p"/><circle class="f3sty6bdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-horizontal-broken"} {...others} />);
}

export default Component;
