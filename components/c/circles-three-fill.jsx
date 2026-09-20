import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tk28m1bge {
  fill: currentColor;
  d: path("M128 120a44 44 0 1 1 44-44a44.05 44.05 0 0 1-44 44m60 8a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m-120 0a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44");
}
</style><path class="tk28m1bge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circles-three-fill"} {...others} />);
}

export default Component;
