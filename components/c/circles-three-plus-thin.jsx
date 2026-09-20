import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.d7q8irbud {
  fill: currentColor;
  d: path("M80 44a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m96 8a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-64a28 28 0 1 1-28 28a28 28 0 0 1 28-28m-96 88a36 36 0 1 0 36 36a36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28a28 28 0 0 1-28 28m132-28a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28h-28a4 4 0 0 1 0-8h28v-28a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4");
}
</style><path class="d7q8irbud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circles-three-plus-thin"} {...others} />);
}

export default Component;
