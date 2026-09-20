import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i2la7dbhy {
  fill: currentColor;
  d: path("M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28m20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m36-36a8 8 0 1 1-8-8a8 8 0 0 1 8 8m-72 72a8 8 0 1 1-8-8a8 8 0 0 1 8 8m72 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="i2la7dbhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dice-five-thin"} {...others} />);
}

export default Component;
