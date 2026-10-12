import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7r42znre {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uhetzobpm {
  d: path("M2.75 7.25h18.5m-15 5h5m-5 5h5M14.5 12l1.25 1.25l2.75-3m-4 7.25l1.25 1.25l2.75-3");
}
</style><g class="hntgybcog"><rect class="f7r42znre"/><path class="uhetzobpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:attendance"} {...others} />);
}

export default Component;
