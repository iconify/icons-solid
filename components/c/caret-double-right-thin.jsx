import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gpurj_bmh {
  fill: currentColor;
  d: path("m138.83 130.83l-80 80a4 4 0 0 1-5.66-5.66L130.34 128L53.17 50.83a4 4 0 0 1 5.66-5.66l80 80a4 4 0 0 1 0 5.66m80-5.66l-80-80a4 4 0 0 0-5.66 5.66L210.34 128l-77.17 77.17a4 4 0 0 0 5.66 5.66l80-80a4 4 0 0 0 0-5.66");
}
</style><path class="gpurj_bmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-double-right-thin"} {...others} />);
}

export default Component;
