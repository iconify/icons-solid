import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iko-20bga {
  fill: currentColor;
  d: path("M11 22v-3h2v3zm-9-9v-2h3v2zm17 0v-2h3v2zm-1 6.9l-2.1-2.1l1.4-1.4l2.1 2.1zm-12 0l-1.4-1.4l2.1-2.1l1.4 1.4zm2.463-4.362Q7 14.074 7 12q0-1.2.538-2.238T9 8V3h6v5q.925.725 1.463 1.763T17 12q0 2.075-1.463 3.538T12 17t-3.537-1.463M11 7.1q.25-.05.5-.075T12 7t.5.025t.5.075V5h-2z");
}
</style><path class="iko-20bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wb-incandescent"} {...others} />);
}

export default Component;
