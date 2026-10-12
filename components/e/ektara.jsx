import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ev0opqbry {
  d: path("m15.08 3.64l2.58.94m-2.58-.94l-3.34 9.16");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j5pu4cbfj {
  cx: 10.38px;
  cy: 16.56px;
  r: 1px;
}

.mhr6r2bqa {
  d: path("M8.68 12.94c1.12-4.3 2.92-9.23 6.4-9.3");
}

.mu7698bfs {
  cx: 10.38px;
  cy: 16.56px;
  r: 4px;
}
</style><g class="hntgybcog"><circle class="mu7698bfs"/><path class="mhr6r2bqa"/><circle class="j5pu4cbfj"/><path class="ev0opqbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ektara"} {...others} />);
}

export default Component;
