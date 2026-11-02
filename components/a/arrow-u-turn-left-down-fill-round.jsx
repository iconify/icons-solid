import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n-hffqb-x {
  fill: currentColor;
  d: path("m8.293 21.707l-4-4a.999.999 0 1 1 1.414-1.414L8 18.586V7a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v6a1 1 0 0 1-2 0V7a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v11.586l2.293-2.293a.999.999 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0");
}
</style><path class="n-hffqb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-u-turn-left-down-fill-round"} {...others} />);
}

export default Component;
