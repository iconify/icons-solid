import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mcer7mbvx {
  fill: currentColor;
  d: path("M14 2a1 1 0 0 1 0 2h-1v.054a9 9 0 0 1 4.618 1.913l1.675-1.674a.999.999 0 1 1 1.414 1.414l-1.674 1.675A9 9 0 1 1 11 4.054V4h-1a1 1 0 0 1 0-2Zm-3 11a1 1 0 0 0 2 0V9a1 1 0 0 0-2 0Z");
}
</style><path class="mcer7mbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:timer-fill"} {...others} />);
}

export default Component;
