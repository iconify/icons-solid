import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aghm759nx {
  d: path("M3 5q4.5-4 9 0t9 0");
}

.enwzisbwr {
  d: path("M3 19q1.5-4 3 0t3 0t3 0t3 0t3 0t3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iz30smblu {
  d: path("M3 12q2.25-4 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><g class="hntgybcog"><path class="aghm759nx"/><path class="iz30smblu"/><path class="enwzisbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:electromagnetic-spectrum"} {...others} />);
}

export default Component;
