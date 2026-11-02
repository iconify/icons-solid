import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h028u6bok {
  fill: currentColor;
  d: path("M4 18a1 1 0 0 0 1 1h16a1 1 0 0 1 0 2H5a3 3 0 0 1-3-3V4a1 1 0 0 1 2 0ZM15 6a2 2 0 1 1 3.999-.001A2 2 0 0 1 15 6m-4 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 11 11m6 3a2 2 0 1 1 3.999-.001A2 2 0 0 1 17 14M6 15a2 2 0 1 1 3.999-.001A2 2 0 0 1 6 15");
}
</style><path class="h028u6bok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-scatter-fill"} {...others} />);
}

export default Component;
