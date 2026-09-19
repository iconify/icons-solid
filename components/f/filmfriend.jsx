import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.emyciunrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.754 23.205l-8.92-4.634a.896.896 0 0 0-1.31.795v9.268a.896.896 0 0 0 1.31.795l8.92-4.634a.896.896 0 0 0 0-1.59");
}

.gehe83u6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 9.5h23c4.415 0 8 3.585 8 8v21h-31c-4.415 0-8-3.585-8-8v-13c0-4.415 3.585-8 8-8");
}
</style><path class="gehe83u6z"/><path class="emyciunrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:filmfriend"} {...others} />);
}

export default Component;
