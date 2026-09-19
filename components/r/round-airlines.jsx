import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zt9xzb3hu {
  fill: currentColor;
  d: path("M19.59 4h-5.01c-.99 0-1.91.49-2.47 1.3L2 20h17l2.56-13.63C21.79 5.14 20.84 4 19.59 4M14.5 14a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="zt9xzb3hu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-airlines"} {...others} />);
}

export default Component;
