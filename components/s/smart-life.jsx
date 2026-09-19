import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bk4wmfbis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.431L24 8.743L5.5 21.431v20.856h37zm-5.035-8.718a4.4 4.4 0 0 0-4.804-2.917l-.008.013m8.695 1.685a8.65 8.65 0 0 0-9.426-5.687");
}
</style><path class="bk4wmfbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:smart-life"} {...others} />);
}

export default Component;
