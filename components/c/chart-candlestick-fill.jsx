import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zsz4yu6-a {
  fill: currentColor;
  d: path("M13 3v1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2v2a1 1 0 0 1-2 0v-2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2V3a1 1 0 0 1 2 0m-7 9v2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2a1 1 0 0 1-2 0a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2v-2a1 1 0 0 1 2 0m12 2v-2a1 1 0 0 1 2 0v2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2v1a1 1 0 0 1-2 0v-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2");
}
</style><path class="zsz4yu6-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-candlestick-fill"} {...others} />);
}

export default Component;
