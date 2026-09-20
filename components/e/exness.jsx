import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.o9yo2xv9y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.734 28.561c-.988 1.677-2.853 2.806-4.99 2.806c-3.173 0-5.744-2.49-5.744-5.56v-3.615c0-3.07 2.571-5.559 5.744-5.559s5.744 2.49 5.744 5.56V24H11m26 7.367L25.512 16.634m11.488 0L25.512 31.366");
}
</style><path class="o9yo2xv9y"/><rect class="j3s9ivbxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:exness"} {...others} />);
}

export default Component;
