import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.uot7lyb4p {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m32-72h-12V80a4 4 0 0 0-7.16-2.46l-56 72A4 4 0 0 0 88 156h52v20a4 4 0 0 0 8 0v-20h12a4 4 0 0 0 0-8m-20 0H96.18L140 91.66Z");
}
</style><path class="uot7lyb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-circle-four-thin"} {...others} />);
}

export default Component;
