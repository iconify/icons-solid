import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.x0b81owrb {
  fill: currentColor;
  d: path("M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="x0b81owrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dot"} {...others} />);
}

export default Component;
