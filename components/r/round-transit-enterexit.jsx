import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n917--b0c {
  fill: currentColor;
  d: path("M14.5 18H8c-1.1 0-2-.9-2-2V9.5C6 8.67 6.67 8 7.5 8S9 8.67 9 9.5v3.27L14.95 7c.57-.55 1.48-.54 2.04.02s.56 1.47.01 2.04L11.15 15h3.35c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5");
}
</style><path class="n917--b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-transit-enterexit"} {...others} />);
}

export default Component;
