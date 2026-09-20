import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ui_7h9ybh {
  fill: currentColor;
  d: path("M128 78a30 30 0 1 0-30-30a30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18a18 18 0 0 1 18-18m94 74a6 6 0 0 1-6 6h-82v30l52.36 22.45A6 6 0 0 1 190 168v48a6 6 0 0 1-12 0v-44l-48.84-21L52 220.46a6 6 0 0 1-8-8.92l78-70.21V110H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6");
}
</style><path class="ui_7h9ybh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:person-simple-tai-chi-light"} {...others} />);
}

export default Component;
