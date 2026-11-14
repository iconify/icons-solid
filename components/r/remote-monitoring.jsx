import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l7bis7p8w {
  d: path("m2.5 10l6-6l6 6");
}

.qq0qdq24z {
  d: path("M5.75 14.5H7L8 12l1.5 5l1-2.5h.75m4.814-2.571a4 4 0 0 1 0 5.142M18.362 10a7 7 0 0 1 0 9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhzdllbhf {
  d: path("M4 8.75V19.5c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V8.75");
}
</style><g class="ulnmmdpxh"><path class="l7bis7p8w"/><path class="zhzdllbhf"/><path class="qq0qdq24z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:remote-monitoring"} {...others} />);
}

export default Component;
