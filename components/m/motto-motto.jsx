import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.zxsp85htc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.7 22h5.8v12.6h-5.8zm14.5 0H34v12.6h-5.8zM5.5 19.8h17.3v-6.4H11.5zm37 0H25.2v-6.4h11.3z");
}
</style><path class="zxsp85htc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:motto-motto"} {...others} />);
}

export default Component;
