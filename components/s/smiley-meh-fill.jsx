import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n6sm44bua {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24M92 96a12 12 0 1 1-12 12a12 12 0 0 1 12-12m76 72H88a8 8 0 0 1 0-16h80a8 8 0 0 1 0 16m-4-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="n6sm44bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:smiley-meh-fill"} {...others} />);
}

export default Component;
