import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qvb074t7p {
  fill: currentColor;
  d: path("M19.707 8.293A1 1 0 0 1 20 9v8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h4c.265 0 .52.105.707.293ZM13 7a2 2 0 0 0 2 2h3l-5-5Zm-2.293 11.707l4-4a.999.999 0 1 0-1.414-1.414l-4 4a.999.999 0 1 0 1.414 1.414M10 13a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm4.01 4H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="qvb074t7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-percent-fill-round"} {...others} />);
}

export default Component;
