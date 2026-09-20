import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.v8wyugsxs {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 200V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4m184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z");
}
</style><path class="v8wyugsxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:sidebar-simple-thin"} {...others} />);
}

export default Component;
