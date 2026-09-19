import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wr432gbdf {
  fill: currentColor;
  d: path("m17.3 5.3l-2.89 2.87l1.42 1.42L18.7 6.7L21 9V3h-6zM9 3H3v6l2.3-2.3l2.87 2.89l1.42-1.42L6.7 5.3zm-.83 11.41L5.3 17.3L3 15v6h6l-2.3-2.3l2.89-2.87zm7.66 0l-1.42 1.42l2.89 2.87L15 21h6v-6l-2.3 2.3z");
}
</style><path class="wr432gbdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-zoom-out-map"} {...others} />);
}

export default Component;
