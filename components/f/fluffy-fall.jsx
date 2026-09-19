import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.f-olpacdp {
  cx: 8.68px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.179px;
  ry: 5.589px;
}

.i4ytw-bcb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.741 24.643c.477 2.208 1.685 2.962 3.259 2.962s2.782-.754 3.259-2.962");
}

.ne0fh7buw {
  cx: 39.321px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 5.179px;
  ry: 5.589px;
}
</style><path class="i4ytw-bcb"/><ellipse class="f-olpacdp"/><ellipse class="ne0fh7buw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fluffy-fall"} {...others} />);
}

export default Component;
