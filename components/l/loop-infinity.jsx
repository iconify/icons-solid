import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.idvjc0t4z {
  d: path("M12 12c-2-3-3.5-4-5.5-4C4.3 8 3 9.8 3 12s1.3 4 3.5 4c2 0 3.5-1 5.5-4s3.5-4 5.5-4c2.2 0 3.5 1.8 3.5 4s-1.3 4-3.5 4");
}

.v6li0ehcu {
  d: path("M19.25 14.25L17.5 16l1.75 1.75");
}
</style><g class="hntgybcog"><path class="idvjc0t4z"/><path class="v6li0ehcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:loop-infinity"} {...others} />);
}

export default Component;
