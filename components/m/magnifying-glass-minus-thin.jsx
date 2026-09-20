import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v-fewukkh {
  fill: currentColor;
  d: path("M148 112a4 4 0 0 1-4 4H80a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m78.83 114.83a4 4 0 0 1-5.66 0l-52.7-52.7a84.1 84.1 0 1 1 5.66-5.66l52.7 52.7a4 4 0 0 1 0 5.66M112 188a76 76 0 1 0-76-76a76.08 76.08 0 0 0 76 76");
}
</style><path class="v-fewukkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:magnifying-glass-minus-thin"} {...others} />);
}

export default Component;
