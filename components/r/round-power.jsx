import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e12op4bry {
  fill: currentColor;
  d: path("M16.01 7L16 4c0-.55-.45-1-1-1s-1 .45-1 1v3h-4V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-.01C6.9 7 6 7.9 6 8.99v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l2.92-2.92c.37-.38.58-.89.58-1.42V8.99C18 7.89 17.11 7 16.01 7");
}
</style><path class="e12op4bry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-power"} {...others} />);
}

export default Component;
