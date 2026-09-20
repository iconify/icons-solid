import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.mgpk_ybqo {
  fill: var(--svg-color--40c0e7, #40c0e7);
  d: path("M32 32h64v64H32z");
}

.x6vb0-lkk {
  fill: none;
  d: path("M0 0h128v128H0z");
}
</style><path class="x6vb0-lkk"/><path class="mgpk_ybqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:stop-button"} {...others} />);
}

export default Component;
