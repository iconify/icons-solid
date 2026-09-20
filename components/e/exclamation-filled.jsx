import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.q31yiwpvu {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M10 18a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm0-12a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1Zm0 9a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z");
}
</style><path clip-rule="evenodd" class="q31yiwpvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:exclamation-filled"} {...others} />);
}

export default Component;
