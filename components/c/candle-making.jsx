import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_8jnlf9b {
  d: path("M8.5 18.5v-8h7v8Z");
}

.qzdq17zey {
  d: path("M5 14v5.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vvo7f-xcz {
  d: path("M11 10.5v2.75a1 1 0 0 0 2 0V10.5m-1-8c2.75 2.25 2.5 4.25 0 5.25c-2.5-1-2.75-3 0-5.25Z");
}
</style><g class="ulnmmdpxh"><path class="qzdq17zey"/><path class="j_8jnlf9b"/><path class="vvo7f-xcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:candle-making"} {...others} />);
}

export default Component;
