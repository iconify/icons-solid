import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ld7q4ph4o {
  fill: currentColor;
  d: path("M19 4c-.55 0-1 .45-1 1v7c0 .55.45 1 1 1s1-.45 1-1V5c0-.55-.45-1-1-1M5 20c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v14c0 .55.45 1 1 1m7-12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m0 6c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1m9.79-4.29a.996.996 0 0 0-1.41 0L19 17.09l-1.38-1.38a.996.996 0 1 0-1.41 1.41l1.38 1.38l-1.38 1.38a.996.996 0 1 0 1.41 1.41L19 19.91l1.38 1.38a.996.996 0 1 0 1.41-1.41l-1.38-1.38l1.38-1.38a.996.996 0 0 0 0-1.41");
}
</style><path class="ld7q4ph4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-remove-road"} {...others} />);
}

export default Component;
