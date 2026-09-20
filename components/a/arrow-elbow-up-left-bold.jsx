import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d25ru_plq {
  fill: currentColor;
  d: path("M204 80v144a12 12 0 0 1-24 0V92H77l27.52 27.51a12 12 0 0 1-17 17l-48-48a12 12 0 0 1 0-17l48-48a12 12 0 1 1 17 17L77 68h115a12 12 0 0 1 12 12");
}
</style><path class="d25ru_plq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-up-left-bold"} {...others} />);
}

export default Component;
