import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o4h-flc5v {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm9 9h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v1.586L9.707 8.293a.999.999 0 1 0-1.414 1.414L12.586 14H11a1 1 0 0 0 0 2");
}
</style><path class="o4h-flc5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-arrow-down-right-fill-round"} {...others} />);
}

export default Component;
