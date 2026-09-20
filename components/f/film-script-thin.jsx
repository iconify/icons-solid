import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vhugsiblz {
  fill: currentColor;
  d: path("M200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12m4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM92 80a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0 96a8 8 0 1 1-8-8a8 8 0 0 1 8 8m0-48a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="vhugsiblz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:film-script-thin"} {...others} />);
}

export default Component;
