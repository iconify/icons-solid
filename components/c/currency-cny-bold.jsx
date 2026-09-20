import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.aerk35b6t {
  fill: currentColor;
  d: path("M52 56a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12m164 100a12 12 0 0 0-12 12v12h-28a12 12 0 0 1-12-12v-44h44a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24h44v4a52.06 52.06 0 0 1-52 52a12 12 0 0 0 0 24a76.08 76.08 0 0 0 76-76v-4h24v44a36 36 0 0 0 36 36h40a12 12 0 0 0 12-12v-24a12 12 0 0 0-12-12");
}
</style><path class="aerk35b6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-cny-bold"} {...others} />);
}

export default Component;
