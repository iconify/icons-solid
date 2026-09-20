import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bwq6u9mgy {
  fill: currentColor;
  d: path("M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12m-120-60a16 16 0 1 0 16-16a16 16 0 0 0-16 16m-8-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32 72a16 16 0 1 0-16-16a16 16 0 0 0 16 16m96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m24-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-24 72a16 16 0 1 0 16-16a16 16 0 0 0-16 16");
}
</style><path class="bwq6u9mgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-scatter-bold"} {...others} />);
}

export default Component;
