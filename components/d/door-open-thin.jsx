import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.pveuct-pw {
  fill: currentColor;
  d: path("M232 220h-28V40a12 12 0 0 0-12-12H64a12 12 0 0 0-12 12v180H24a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8M196 40v180h-24V36h20a4 4 0 0 1 4 4M60 40a4 4 0 0 1 4-4h100v184H60Zm80 92a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="pveuct-pw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:door-open-thin"} {...others} />);
}

export default Component;
