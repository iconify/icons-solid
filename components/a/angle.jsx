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

.mm4qtlf9r {
  d: path("M4.75 3.75v15.5h15.5");
}

.pn61g8bmj {
  d: path("M7.75 16.25h3v-3");
}
</style><g class="hntgybcog"><path class="mm4qtlf9r"/><path class="pn61g8bmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:angle"} {...others} />);
}

export default Component;
