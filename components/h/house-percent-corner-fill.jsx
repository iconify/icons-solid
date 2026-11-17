import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wbvzjggas {
  fill: currentColor;
  d: path("M17.714 9H10a.997.997 0 0 0-1 1v11a1 1 0 0 1-1 1H6a3 3 0 0 1-3-3v-8.092c0-.866.373-1.689 1.024-2.258l6-5.25a3 3 0 0 1 3.952 0l4.397 3.847A1.001 1.001 0 0 1 17.714 9M12 14a2 2 0 1 1 3.999-.001A2 2 0 0 1 12 14m8.707.707l-6 6a.999.999 0 1 1-1.414-1.414l6-6a.999.999 0 1 1 1.414 1.414M18 20a2 2 0 1 1 3.999-.001A2 2 0 0 1 18 20");
}
</style><path class="wbvzjggas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-percent-corner-fill"} {...others} />);
}

export default Component;
