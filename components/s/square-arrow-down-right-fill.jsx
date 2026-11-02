import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rt1ybccud {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm9 11h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v1.586L9.707 8.293a.999.999 0 1 0-1.414 1.414L12.586 14H11a1 1 0 0 0 0 2");
}
</style><path class="rt1ybccud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-arrow-down-right-fill"} {...others} />);
}

export default Component;
