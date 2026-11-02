import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tst8xobur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3c.5 2.5 2 4.5 4 6c1.5 1.5 2 3.5 2 6a6 6 0 1 1-12 0c0-1.5.5-2.5 1-3m0 0a2 2 0 1 0 4 0c0-1.5-.5-2-1-3c-1-2-.5-4 2-6");
}
</style><path class="tst8xobur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flame-sharp"} {...others} />);
}

export default Component;
