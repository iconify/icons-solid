import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j0sms7xve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.955 8.21a9.25 9.25 0 0 0-15.79 6.54v18.5a9.25 9.25 0 0 1-15.792 6.54M14.914 24h18.5M6.78 37.66a9.254 9.254 0 0 1 5.358-13.236m24.027-.84a9.254 9.254 0 0 0 5.383-13.243");
}
</style><path class="j0sms7xve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fedora"} {...others} />);
}

export default Component;
