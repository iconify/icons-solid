import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aje1izkvj {
  fill: currentColor;
  d: path("M3 21V3h11v2H5v14h14v-9h2v11H3Zm9-5l-1.25-2.75L8 12l2.75-1.25L12 8l1.25 2.75L16 12l-2.75 1.25L12 16Zm5-6l-.95-2.05L14 7l2.05-.95L17 4l.95 2.05L20 7l-2.05.95L17 10Z");
}
</style><path class="aje1izkvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:photo-filter-sharp"} {...others} />);
}

export default Component;
