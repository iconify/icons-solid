import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tdvd873wr {
  fill: currentColor;
  d: path("M22 8H2V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Zm-12 2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9Zm1 7a6 6 0 1 1 12 0a6 6 0 0 1-12 0m2 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0m5-2v1h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0");
}
</style><path class="tdvd873wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:credit-card-clock-corner-fill-sharp"} {...others} />);
}

export default Component;
