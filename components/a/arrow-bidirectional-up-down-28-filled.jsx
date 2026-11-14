import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ol84mqi3p {
  fill: currentColor;
  d: path("M14 3a1 1 0 0 1 .707.293l6 6a1 1 0 1 1-1.414 1.414L15 6.414v15.172l4.293-4.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 1 1 1.414-1.414L13 21.586V6.414l-4.293 4.293a1 1 0 1 1-1.414-1.414l6-6A1 1 0 0 1 14 3");
}
</style><path class="ol84mqi3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-bidirectional-up-down-28-filled"} {...others} />);
}

export default Component;
