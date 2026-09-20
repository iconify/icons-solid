import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.julk3kboh {
  fill: currentColor;
  d: path("M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-16 48v88a20 20 0 0 1-20 20h-36a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20m-24 4h-28v80h28Zm-68-4v128a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V88a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20m-24 4H68v120h28Z");
}
</style><path class="julk3kboh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:align-top-bold"} {...others} />);
}

export default Component;
