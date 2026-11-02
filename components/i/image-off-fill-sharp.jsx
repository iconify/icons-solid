import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o2hezte0a {
  fill: currentColor;
  d: path("m2.707 1.293l20 20a.999.999 0 1 1-1.414 1.414L20.586 22H3a1 1 0 0 1-1-1v-1.586l8-8L8.586 10L2 16.586V3.414l-.707-.707a.999.999 0 1 1 1.414-1.414M6.243 2H21a1 1 0 0 1 1 1v14.757ZM14 8a2 2 0 1 0 3.999.001A2 2 0 0 0 14 8");
}
</style><path class="o2hezte0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:image-off-fill-sharp"} {...others} />);
}

export default Component;
