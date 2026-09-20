import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v-58opbgx {
  fill: currentColor;
  d: path("M172 160a52 52 0 0 1-86.67 38.76a4 4 0 1 1 5.34-6A44 44 0 1 0 120 116a4 4 0 0 1-3.2-6.4L160 52H88a4 4 0 0 1 0-8h80a4 4 0 0 1 3.2 6.4l-43.61 58.15A52.08 52.08 0 0 1 172 160");
}
</style><path class="v-58opbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-three-thin"} {...others} />);
}

export default Component;
