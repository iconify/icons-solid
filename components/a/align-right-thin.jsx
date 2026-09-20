import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.a7q9klbfv {
  fill: currentColor;
  d: path("M220 40v176a4 4 0 0 1-8 0V40a4 4 0 0 1 8 0m-32 24v40a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h96a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4Zm8 88v40a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12v-40a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4h136a4 4 0 0 0 4-4Z");
}
</style><path class="a7q9klbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-right-thin"} {...others} />);
}

export default Component;
