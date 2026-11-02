import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jjbw6ib5k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m8 8l7 7a1.414 1.414 0 0 1 0 2l-2 2c-.369.369-1 .369-1 0V5c0-.369.631-.369 1 0l2 2a1.414 1.414 0 0 1 0 2l-7 7");
}
</style><path class="jjbw6ib5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bluetooth-duotone"} {...others} />);
}

export default Component;
