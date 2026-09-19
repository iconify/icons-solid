import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mysrbpbjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.709 4.5h-7.474c-5.447 0-10.198 4.294-9.88 12.076H7.99v7.245h5.724V43.5h8.498V23.821h8.856V43.5h8.944V16.576H22.748v-1.879a2.805 2.805 0 0 1 2.848-2.951h5.113Z");
}
</style><path class="mysrbpbjw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fiverr"} {...others} />);
}

export default Component;
