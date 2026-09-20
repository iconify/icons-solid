import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.k8bqo6bev {
  fill: currentColor;
  d: path("M232 68h-28V48a4 4 0 0 0-4-4H56a4 4 0 0 0-4 4v20H24a12 12 0 0 0-12 12v16a36 36 0 0 0 36 36h6.66A76 76 0 0 0 124 187.89V220H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8h-28v-32.12c32.93-1.74 60.41-24.91 69.11-55.88H208a36 36 0 0 0 36-36V80a12 12 0 0 0-12-12M48 124a28 28 0 0 1-28-28V80a4 4 0 0 1 4-4h28v36a77 77 0 0 0 1 12Zm148-12.9c0 37.71-30.79 68.62-68 68.9a68 68 0 0 1-68-68V52h136ZM236 96a28 28 0 0 1-28 28h-5.1a77.4 77.4 0 0 0 1.1-12.9V76h28a4 4 0 0 1 4 4Z");
}
</style><path class="k8bqo6bev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:trophy-thin"} {...others} />);
}

export default Component;
