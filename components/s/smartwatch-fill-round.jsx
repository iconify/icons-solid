import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m542cpb6m {
  fill: currentColor;
  d: path("M8 5.416V5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v.416A5 5 0 0 1 19 10v4c0 1.99-1.175 3.79-3 4.584V19a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-.416A5 5 0 0 1 5 14v-4c0-1.99 1.175-3.79 3-4.584M14 5a.997.997 0 0 0-1-1h-2a.997.997 0 0 0-1 1Zm-3 15h2a1 1 0 0 0 1-1h-4a1 1 0 0 0 1 1");
}
</style><path class="m542cpb6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:smartwatch-fill-round"} {...others} />);
}

export default Component;
