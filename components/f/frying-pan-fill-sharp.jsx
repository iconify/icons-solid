import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u2i1mhb-z {
  fill: currentColor;
  d: path("m14.764 10l5.789-2.894a1 1 0 1 1 .894 1.788L16 11.618V16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1Z");
}
</style><path class="u2i1mhb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:frying-pan-fill-sharp"} {...others} />);
}

export default Component;
