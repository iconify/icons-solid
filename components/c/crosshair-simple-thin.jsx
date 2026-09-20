import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.g0k0accej {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m4 191.91V184a4 4 0 0 0-8 0v35.91A92.13 92.13 0 0 1 36.09 132H72a4 4 0 0 0 0-8H36.09A92.13 92.13 0 0 1 124 36.09V72a4 4 0 0 0 8 0V36.09A92.13 92.13 0 0 1 219.91 124H184a4 4 0 0 0 0 8h35.91A92.13 92.13 0 0 1 132 219.91");
}
</style><path class="g0k0accej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:crosshair-simple-thin"} {...others} />);
}

export default Component;
