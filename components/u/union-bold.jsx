import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.prtis2bxt {
  fill: currentColor;
  d: path("M212 64v80a84 84 0 0 1-168 0V64a12 12 0 0 1 24 0v80a60 60 0 0 0 120 0V64a12 12 0 0 1 24 0");
}
</style><path class="prtis2bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:union-bold"} {...others} />);
}

export default Component;
