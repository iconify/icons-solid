import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.gw9i1nb-t {
  fill: currentColor;
  d: path("M208 124h-36V48a12 12 0 0 0-12-12H96a12 12 0 0 0-12 12v76H48a4 4 0 0 0 0 8h36v76a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-76h36a4 4 0 0 0 0-8m-44 84a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h64a4 4 0 0 1 4 4Z");
}
</style><path class="gw9i1nb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-center-vertical-simple-thin"} {...others} />);
}

export default Component;
