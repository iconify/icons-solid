import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v4in35ekt {
  fill: currentColor;
  d: path("M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104");
}
</style><path class="v4in35ekt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circle-fill"} {...others} />);
}

export default Component;
