import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.efdiu7bwr {
  d: path("M8.75 6.25a3.25 3.25 0 0 1 6.5 0ZM7.25 14h-3.5m13 0h3.5m-12.5 4.25l-3 1.75m11.5-1.75l3 1.75M8.5 10.75L5.25 9m10.25 1.75L18.75 9M12 12.25v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x2nbrrpmx {
  width: 9.5px;
  height: 12.5px;
  x: 7.25px;
  y: 8.75px;
  rx: 4.75px;
}
</style><g class="hntgybcog"><rect class="x2nbrrpmx"/><path class="efdiu7bwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bug-report"} {...others} />);
}

export default Component;
