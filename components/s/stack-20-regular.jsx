import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.c08bzqgfy {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm2 11a2 2 0 0 1-1.732-1H12a3 3 0 0 0 3-3V5.268A2 2 0 0 1 16 7v4a4 4 0 0 1-4 4zm2 2a2 2 0 0 1-1.732-1H12a5 5 0 0 0 5-5V7.268A2 2 0 0 1 18 9v2a6 6 0 0 1-6 6z");
}
</style><path class="c08bzqgfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:stack-20-regular"} {...others} />);
}

export default Component;
