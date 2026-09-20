import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gziwnon6m {
  fill: currentColor;
  d: path("M204 64v80a76 76 0 0 1-152 0V64a4 4 0 0 1 8 0v80a68 68 0 0 0 136 0V64a4 4 0 0 1 8 0");
}
</style><path class="gziwnon6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:union-thin"} {...others} />);
}

export default Component;
