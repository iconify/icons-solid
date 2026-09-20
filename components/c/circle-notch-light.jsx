import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zbtousbqz {
  fill: currentColor;
  d: path("M230 128a102 102 0 0 1-204 0c0-40.18 23.35-76.86 59.5-93.45a6 6 0 0 1 5 10.9C58.61 60.09 38 92.49 38 128a90 90 0 0 0 180 0c0-35.51-20.61-67.91-52.5-82.55a6 6 0 0 1 5-10.9C206.65 51.14 230 87.82 230 128");
}
</style><path class="zbtousbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:circle-notch-light"} {...others} />);
}

export default Component;
