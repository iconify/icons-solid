import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o8hmt80gq {
  fill: currentColor;
  d: path("M16.874 5H20a1 1 0 0 1 0 2h-1v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 14 22h-4a5 5 0 0 1-5-5V7H4a1 1 0 0 1 0-2h3.126A4.01 4.01 0 0 1 11 2h2a4.006 4.006 0 0 1 3.874 3M13 4h-2a2.01 2.01 0 0 0-1.733 1h5.466A2 2 0 0 0 13 4");
}
</style><path class="o8hmt80gq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:trash-fill-round"} {...others} />);
}

export default Component;
