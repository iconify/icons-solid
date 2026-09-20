import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.m65j_bc8e {
  fill: currentColor;
  d: path("M100 28H64a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176H68V52h28Zm96-176h-36a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h36a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-28V52h28Z");
}
</style><path class="m65j_bc8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:columns-bold"} {...others} />);
}

export default Component;
