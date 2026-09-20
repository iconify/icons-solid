import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.nzlcebc3s {
  fill: currentColor;
  d: path("M3 10a7 7 0 0 1 14 0zm7-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16");
}
</style><path class="nzlcebc3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:circle-half-fill-20-regular"} {...others} />);
}

export default Component;
