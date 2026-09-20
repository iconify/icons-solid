import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.w-bxaib1a {
  fill: currentColor;
  d: path("M232 58H24a14 14 0 0 0-14 14v128a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0v-18h20v18a6 6 0 0 0 12 0V72a14 14 0 0 0-14-14M22 72a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2v98H22Zm90 78a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6H48a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6Zm-58-48h52v36H54Zm90 48h64a6 6 0 0 0 6-6V96a6 6 0 0 0-6-6h-64a6 6 0 0 0-6 6v48a6 6 0 0 0 6 6m6-48h52v36h-52Z");
}
</style><path class="w-bxaib1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:memory-light"} {...others} />);
}

export default Component;
