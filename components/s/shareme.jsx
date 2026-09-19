import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.xkzwiobig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.4 17.33a9.43 9.43 0 1 1 6.67 16.1c-5.21 0-7.42-4.95-10.07-9.43c-2.83-4.78-4.86-9.43-10.07-9.43a9.43 9.43 0 1 0 6.6 16.16");
}
</style><path class="xkzwiobig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:shareme"} {...others} />);
}

export default Component;
