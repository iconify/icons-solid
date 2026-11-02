import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ru2dtsixs {
  fill: currentColor;
  d: path("M8 6h8V3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v8h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3H8v3a1 1 0 0 1-2 0v-3H3a1 1 0 0 1 0-2h3V8H3a1 1 0 0 1 0-2h3V3a1 1 0 0 1 2 0Z");
}
</style><path class="ru2dtsixs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:frame-fill-round"} {...others} />);
}

export default Component;
