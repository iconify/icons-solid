import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnffbu21w {
  d: path("m6.5 14l3-3.75M10 14l1.5-1.9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kxl7_29fo {
  d: path("M10 2.75h4m-2 0v4.5");
}

.moc6ujbgs {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 7.25px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><path class="kxl7_29fo"/><rect class="moc6ujbgs"/><path class="gnffbu21w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rearview-mirror"} {...others} />);
}

export default Component;
