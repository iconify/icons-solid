import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2-d67nmy {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm6.293 6.707l3 3a1 1 0 0 0 1.414 0l3-3a.999.999 0 1 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414");
}
</style><path class="d2-d67nmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-arrow-down-fill-round"} {...others} />);
}

export default Component;
