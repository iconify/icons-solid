import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.z4u1vr78o {
  fill: currentColor;
  d: path("M213.23 42.77A30 30 0 0 0 167 80.54L80.54 167a30.07 30.07 0 0 0-37.77 3.81A30 30 0 1 0 89 175.46L175.46 89a30 30 0 0 0 37.77-46.25Zm-136.51 162a18 18 0 1 1 0-25.46a18 18 0 0 1 0 25.43Zm128-128a18 18 0 0 1-25.46 0a18 18 0 1 1 25.46 0");
}
</style><path class="z4u1vr78o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:line-segment-light"} {...others} />);
}

export default Component;
