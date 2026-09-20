import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.mnenixjkr {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-72 136h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16m32-40H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m32-40H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16");
}
</style><path class="mnenixjkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:funnel-simple-fill"} {...others} />);
}

export default Component;
