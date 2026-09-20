import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":167};
const content = `<style>.d52vnegxy {
  fill: var(--svg-color--14c6cb, #14c6cb);
  d: path("m256 0l-31.961 55.366L192.078 0zM85.344 36.952H64.016l53.32 92.381l-21.328 36.952L0 0h106.672l53.351 92.38l10.664-18.475L128 0h42.687l21.328 36.952l21.329 36.953l-53.32 92.38z");
}
</style><path class="d52vnegxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:waypoint-icon"} {...others} />);
}

export default Component;
