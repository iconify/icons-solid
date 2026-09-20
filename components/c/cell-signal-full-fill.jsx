import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.by7vjkbvm {
  fill: currentColor;
  d: path("M208 40v160a16 16 0 0 1-16 16H32a16 16 0 0 1-11.3-27.32l160-160A16 16 0 0 1 208 40");
}
</style><path class="by7vjkbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cell-signal-full-fill"} {...others} />);
}

export default Component;
