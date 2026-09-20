import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.x1mqhsdjk {
  fill: currentColor;
  d: path("M236 192a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4V57.66L42.83 98.83a4 4 0 0 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1-5.66 5.66L92 57.66V188h140a4 4 0 0 1 4 4");
}
</style><path class="x1mqhsdjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-left-up-thin"} {...others} />);
}

export default Component;
