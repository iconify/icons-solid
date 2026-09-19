import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wuxaahbrs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.84 36.77a8.66 8.66 0 0 0 1.5-17.18a12.75 12.75 0 0 0-22.33-3a10.12 10.12 0 0 0 .62 20.22ZM14.01 16.55l28.1 16.26m-5.77-13.22L6.6 32.81");
}
</style><path class="wuxaahbrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:microsoftonedrive"} {...others} />);
}

export default Component;
