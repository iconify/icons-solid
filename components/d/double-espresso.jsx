import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eooy75brd {
  d: path("M8.75 9H9a1.5 1.5 0 0 1 0 3h-.75m5-4.5h5.5v3a2.75 2.75 0 0 1-5.5 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxyabovjh {
  d: path("M18.75 9H19a1.5 1.5 0 0 1 0 3h-.75m-15.5 4h18.5");
}

.mhkuqgz9x {
  d: path("M3.25 7.5h5.5v3a2.75 2.75 0 0 1-5.5 0Z");
}
</style><g class="hntgybcog"><path class="mhkuqgz9x"/><path class="eooy75brd"/><path class="hxyabovjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:double-espresso"} {...others} />);
}

export default Component;
