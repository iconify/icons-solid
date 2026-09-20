import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cikm25usp {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12zm4-4h6v-2l2 1.05v-4.1L14 13v-2H8z");
}
</style><path class="cikm25usp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:camera-indoor-sharp"} {...others} />);
}

export default Component;
