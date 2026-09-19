import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ilhqy3baw {
  fill: currentColor;
  d: path("M20.18 13.4L19.1 21h-9L5 15.62l1.22-1.23l3.78.85V4.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6h1.38z");
}
</style><path class="ilhqy3baw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-pan-tool-alt"} {...others} />);
}

export default Component;
