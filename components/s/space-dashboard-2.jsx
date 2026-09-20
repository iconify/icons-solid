import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iwh8v4h6z {
  fill: currentColor;
  d: path("M21 21V3zM5 21h8V3H5q-.825 0-1.412.588T3 5v14q0 .825.588 1.413T5 21m10 0h4q.825 0 1.413-.587T21 19v-6h-6zm0-10h6V5q0-.825-.587-1.412T19 3h-4z");
}
</style><path class="iwh8v4h6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:space-dashboard-2"} {...others} />);
}

export default Component;
