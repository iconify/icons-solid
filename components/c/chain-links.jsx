import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abyfss8ae {
  d: path("M14.828 9.172za1.5 1.5 0 0 1 0 2.121l-3.535 3.535a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l3.535-3.535a1.5 1.5 0 0 1 2.121 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yvw184-et {
  d: path("M18.718 5.282za4 4 0 0 1 0 5.657l-.354.354a4 4 0 0 1-5.657 0a4 4 0 0 1 0-5.657l.354-.354a4 4 0 0 1 5.657 0m-7.425 7.425za4 4 0 0 1 0 5.657l-.354.354a4 4 0 0 1-5.657 0a4 4 0 0 1 0-5.657l.354-.354a4 4 0 0 1 5.657 0");
}
</style><g class="hntgybcog"><path class="yvw184-et"/><path class="abyfss8ae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chain-links"} {...others} />);
}

export default Component;
