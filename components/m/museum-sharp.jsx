import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g1vo3xbjp {
  fill: currentColor;
  d: path("M3 21v-1h2V10H3v-.461l9-6.308l9 6.307V10h-2v10h2v1zm5.616-3.5h1V13L12 16.538L14.385 13v4.5h1v-6h-1.116L12 14.885L9.73 11.5H8.617z");
}
</style><path class="g1vo3xbjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:museum-sharp"} {...others} />);
}

export default Component;
