import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.wtkbyqb0o {
  fill: currentColor;
  d: path("M100 72a4 4 0 0 1 4-4a100.11 100.11 0 0 1 100 100a4 4 0 0 1-8 0a92.1 92.1 0 0 0-92-92a4 4 0 0 1-4-4m140 124H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36v124a4 4 0 0 0 4 4h168a4 4 0 0 0 0-8");
}
</style><path class="wtkbyqb0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:angle-thin"} {...others} />);
}

export default Component;
