import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tee5rfbab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.88 14.827s2.228 1.697 8.342 5.588s14.936-2.052 14.936-2.052L24.055 5.5C16.115 13.916 5.95 16.934 5.95 16.934l23.17 16.24s-2.23-1.698-8.343-5.59c-6.114-3.89-14.936 2.053-14.936 2.053L23.945 42.5c7.94-8.417 18.104-11.434 18.104-11.434z");
}
</style><path class="tee5rfbab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:suzuki"} {...others} />);
}

export default Component;
