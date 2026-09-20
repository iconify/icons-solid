import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ioqz1k58e {
  fill: currentColor;
  d: path("M236 144a68.07 68.07 0 0 1-68 68H80a12 12 0 0 1 0-24h88a44 44 0 0 0 0-88H61l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L61 76h107a68.08 68.08 0 0 1 68 68");
}
</style><path class="ioqz1k58e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-up-left-bold"} {...others} />);
}

export default Component;
