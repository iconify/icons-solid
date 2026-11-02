import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o7is6ubrr {
  fill: currentColor;
  d: path("M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-2V7a1 1 0 0 0-2 0v5a.998.998 0 0 0 1.6.8l4-3a1 1 0 0 0-1.2-1.6Z");
}
</style><path class="o7is6ubrr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:clock-2-fill-sharp"} {...others} />);
}

export default Component;
