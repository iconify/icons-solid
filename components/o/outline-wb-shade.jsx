import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u61r1ezch {
  fill: currentColor;
  d: path("M14 12v2.5l5.5 5.5H22zm0 8h3l-3-3zM8 4l-6 6h2v10h8V10h2zm1 10H7v-4h2z");
}
</style><path class="u61r1ezch"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-wb-shade"} {...others} />);
}

export default Component;
