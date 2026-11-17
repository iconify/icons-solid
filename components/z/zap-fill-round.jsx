import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h1o6l0bly {
  fill: currentColor;
  d: path("M11.722 3.943A1.697 1.697 0 0 1 14.75 5v3a.997.997 0 0 0 1 1H17a1.966 1.966 0 0 1 1.538 3.188l-6.26 7.869A1.699 1.699 0 0 1 9.25 19v-3a.997.997 0 0 0-1-1H7a1.966 1.966 0 0 1-1.538-3.188Z");
}
</style><path class="h1o6l0bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:zap-fill-round"} {...others} />);
}

export default Component;
