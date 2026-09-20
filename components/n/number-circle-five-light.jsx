import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.acypo9vyd {
  fill: currentColor;
  d: path("M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90M117.08 86l-5 30a36 36 0 0 1 11.92-2a34 34 0 0 1 0 68a33.6 33.6 0 0 1-24.29-9.8a6 6 0 1 1 8.58-8.4A21.65 21.65 0 0 0 124 170a22 22 0 0 0 0-44a21.65 21.65 0 0 0-15.71 6.2a6 6 0 0 1-10.21-5.2l8-48a6 6 0 0 1 5.92-5h40a6 6 0 0 1 0 12Z");
}
</style><path class="acypo9vyd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-circle-five-light"} {...others} />);
}

export default Component;
