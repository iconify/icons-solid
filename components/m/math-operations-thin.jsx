import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.s_fuwbo0d {
  fill: currentColor;
  d: path("M108 72a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m-4 108H76v-28a4 4 0 0 0-8 0v28H40a4 4 0 0 0 0 8h28v28a4 4 0 0 0 8 0v-28h28a4 4 0 0 0 0-8m48-8h64a4 4 0 0 0 0-8h-64a4 4 0 0 0 0 8m64 24h-64a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8m-58.83-97.17a4 4 0 0 0 5.66 0L184 77.66l21.17 21.17a4 4 0 1 0 5.66-5.66L189.66 72l21.17-21.17a4 4 0 1 0-5.66-5.66L184 66.34l-21.17-21.17a4 4 0 0 0-5.66 5.66L178.34 72l-21.17 21.17a4 4 0 0 0 0 5.66");
}
</style><path class="s_fuwbo0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:math-operations-thin"} {...others} />);
}

export default Component;
