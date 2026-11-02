import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lqu48-7cw {
  fill: currentColor;
  d: path("M9 2v20H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm2 7V2h6a5 5 0 0 1 5 5v2Zm4 13h-4V11h4Zm7-11v6a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22V11Z");
}
</style><path class="lqu48-7cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-treemap-fill-round"} {...others} />);
}

export default Component;
