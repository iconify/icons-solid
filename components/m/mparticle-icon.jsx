import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":214};
const content = `<style>.j371nvhhn {
  d: path("M256 106.654v53.308l-85.333 53.32v-53.32zm-85.333 0v53.308l-85.334 53.32v-53.32zm-85.334 0v53.308L0 213.282v-53.32zM256 0v53.32l-85.333 53.321v-53.32zm-85.333 0v53.32l-85.334 53.321v-53.32zM85.333 0v53.32L0 106.642v-53.32z");
}
</style><path class="j371nvhhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:mparticle-icon"} {...others} />);
}

export default Component;
