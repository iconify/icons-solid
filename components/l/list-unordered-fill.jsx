import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x-5v2fb5a {
  fill: currentColor;
  d: path("M5 6h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-4 5h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m-4 5h.01a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2m4 0h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><path class="x-5v2fb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-unordered-fill"} {...others} />);
}

export default Component;
