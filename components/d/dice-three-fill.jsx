import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.y-xufnbip {
  fill: currentColor;
  d: path("M192 32H64a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h128a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32M92 104a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36 36a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="y-xufnbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:dice-three-fill"} {...others} />);
}

export default Component;
