import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":124};
const content = `<style>.g2cexcbgj {
  d: path("M109.076 96.055v26.98H.32l70.06-95.568H10.236V.486h113.456L53.956 96.055z");
}

.nw4on6biy {
  d: path("M120.43 36.02s0-33.818 33.82-33.818h101.456s0 33.819-33.82 33.819zm0 43.213s0-33.819 33.82-33.819h50.727s0 33.82-33.82 33.82zm0 43.213s0-33.818 33.82-33.818h16.907s0 33.818-33.817 33.818z");
}

.x4qtlgbhw {
  fill: var(--svg-color--6fb643, #6fb643);
}
</style><g class="x4qtlgbhw"><path class="nw4on6biy"/><path class="g2cexcbgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:zend-framework"} {...others} />);
}

export default Component;
