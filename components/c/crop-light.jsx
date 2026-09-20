import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.it91vjxvb {
  fill: currentColor;
  d: path("M238 192a6 6 0 0 1-6 6h-34v34a6 6 0 0 1-12 0v-34H64a6 6 0 0 1-6-6V70H24a6 6 0 0 1 0-12h34V24a6 6 0 0 1 12 0v162h162a6 6 0 0 1 6 6M96 70h90v90a6 6 0 0 0 12 0V64a6 6 0 0 0-6-6H96a6 6 0 0 0 0 12");
}
</style><path class="it91vjxvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:crop-light"} {...others} />);
}

export default Component;
