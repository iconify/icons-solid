import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ekggvtblj {
  cx: 8.75px;
  cy: 12px;
  r: 6px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v1ocdgb7u {
  cx: 15.25px;
  cy: 12px;
  r: 6px;
}
</style><g class="hntgybcog"><circle class="ekggvtblj"/><circle class="v1ocdgb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:blend-mode"} {...others} />);
}

export default Component;
