import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.qrp4axuui {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 15.643l13.929 20.893M32.357 19.82L21.214 36.536m-5.571 0L29.57 15.643m-19.5 20.893l16.715-25.072L43.5 36.536m-39 0l13.929-20.893l13.928 20.893");
}
</style><path class="qrp4axuui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mymountsinai"} {...others} />);
}

export default Component;
