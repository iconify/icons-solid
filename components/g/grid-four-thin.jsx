import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ub9tr8bma {
  fill: currentColor;
  d: path("M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 12v68h-72V52h68a4 4 0 0 1 4 4M56 52h68v72H52V56a4 4 0 0 1 4-4m-4 148v-68h72v72H56a4 4 0 0 1-4-4m148 4h-68v-72h72v68a4 4 0 0 1-4 4");
}
</style><path class="ub9tr8bma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:grid-four-thin"} {...others} />);
}

export default Component;
