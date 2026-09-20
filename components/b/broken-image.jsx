import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dsudt8rzg {
  fill: currentColor;
  d: path("M5.616 20q-.691 0-1.153-.462T4 18.384v-5.676l2 2l4-4l4 4l4-4l2 2v5.677q0 .69-.462 1.153T18.384 20zm0-16h12.769q.69 0 1.153.463T20 5.616v5.67l-2-2l-4 4l-4-4l-4 4l-2-2v-5.67q0-.691.463-1.153T5.616 4");
}
</style><path class="dsudt8rzg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:broken-image"} {...others} />);
}

export default Component;
