import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ufvf_dnwh {
  fill: currentColor;
  d: path("M11 2h2a2 2 0 0 1 2 2a2 2 0 0 1 2 2v14h4a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h4V6a2 2 0 0 1 2-2a2 2 0 0 1 2-2m1 5a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm0 4a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm.01 4H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="ufvf_dnwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:skyscraper-fill-round"} {...others} />);
}

export default Component;
