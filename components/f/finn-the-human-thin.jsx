import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vv9hn24dm {
  fill: currentColor;
  d: path("M168 108H88a36 36 0 0 0-36 36v8a36 36 0 0 0 36 36h80a36 36 0 0 0 36-36v-8a36 36 0 0 0-36-36m28 44a28 28 0 0 1-28 28H88a28 28 0 0 1-28-28v-8a28 28 0 0 1 28-28h80a28 28 0 0 1 28 28Zm12-108a28 28 0 0 0-27.71 24H75.71A28 28 0 0 0 20 72v80a68.07 68.07 0 0 0 68 68h80a68.07 68.07 0 0 0 68-68V72a28 28 0 0 0-28-28m20 108a60.07 60.07 0 0 1-60 60H88a60.07 60.07 0 0 1-60-60V72a20 20 0 0 1 40 0a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4a20 20 0 0 1 40 0Zm-128-4a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="vv9hn24dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:finn-the-human-thin"} {...others} />);
}

export default Component;
