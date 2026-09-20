import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v-eqat0pq {
  fill: currentColor;
  d: path("m144.49 136.49l-40 40a12 12 0 0 1-17-17L107 140H24a12 12 0 0 1 0-24h83L87.51 96.49a12 12 0 0 1 17-17l40 40a12 12 0 0 1-.02 17M200 28h-64a12 12 0 0 0 0 24h52v152h-52a12 12 0 0 0 0 24h64a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12");
}
</style><path class="v-eqat0pq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sign-in-bold"} {...others} />);
}

export default Component;
