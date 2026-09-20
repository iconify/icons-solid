import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.dcpsfge-d {
  d: path("m18 19 3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kqojuabdu {
  d: path("M16.5 12.29a4 4 0 1 1 -3 0");
}
</style><g class="hntgybcog"><path class="abnm6smsv"/><path class="kqojuabdu"/><path class="dcpsfge-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:audit-outline-thin"} {...others} />);
}

export default Component;
