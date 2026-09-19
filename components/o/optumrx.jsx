import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uffpc9b3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.036 16.964L16.964 31.036m5.744-22.4l16.657 16.656c4.062 4.063 4.194 10.468.294 14.368c-3.896 3.9-10.304 3.767-14.367-.295L8.635 22.708C4.573 18.645 4.441 12.24 8.341 8.34s10.305-3.768 14.367.294Z");
}
</style><path class="uffpc9b3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:optumrx"} {...others} />);
}

export default Component;
