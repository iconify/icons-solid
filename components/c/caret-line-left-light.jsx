import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dz52jhbhh {
  fill: currentColor;
  d: path("M196.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L120.49 128ZM72 42a6 6 0 0 0-6 6v160a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6");
}
</style><path class="dz52jhbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-line-left-light"} {...others} />);
}

export default Component;
