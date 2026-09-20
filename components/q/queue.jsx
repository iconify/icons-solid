import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zh-z_tb_l {
  fill: currentColor;
  d: path("M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m104 56H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m0 64H40a8 8 0 0 0 0 16h96a8 8 0 0 0 0-16m112-24a8 8 0 0 1-3.76 6.78l-64 40A8 8 0 0 1 168 200v-80a8 8 0 0 1 12.24-6.78l64 40A8 8 0 0 1 248 160m-23.09 0L184 134.43v51.14Z");
}
</style><path class="zh-z_tb_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:queue"} {...others} />);
}

export default Component;
