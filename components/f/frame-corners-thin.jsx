import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.fuz9-gbmp {
  fill: currentColor;
  d: path("M196 80v32a4 4 0 0 1-8 0V84h-28a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4M96 172H68v-28a4 4 0 0 0-8 0v32a4 4 0 0 0 4 4h32a4 4 0 0 0 0-8M228 56v144a12 12 0 0 1-12 12H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12m-8 0a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v144a4 4 0 0 0 4 4h176a4 4 0 0 0 4-4Z");
}
</style><path class="fuz9-gbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:frame-corners-thin"} {...others} />);
}

export default Component;
