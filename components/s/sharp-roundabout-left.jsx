import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.de6413cbc {
  fill: currentColor;
  d: path("M16 13c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4v1H5.83l1.59 1.59L6 13L2 9l4-4l1.41 1.41L5.83 8h4.25A6 6 0 0 1 16 3c3.31 0 6 2.69 6 6c0 2.97-2.16 5.44-5 5.92V21h-2v-8z");
}
</style><path class="de6413cbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-roundabout-left"} {...others} />);
}

export default Component;
