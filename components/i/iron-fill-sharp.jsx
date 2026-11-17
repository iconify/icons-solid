import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kjz6qmq_g {
  fill: currentColor;
  d: path("M14 6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1.002 1.002 0 0 1-.707-1.707l7-7A1 1 0 0 1 10 10h4Zm6 4V7h-4v3Z");
}
</style><path class="kjz6qmq_g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:iron-fill-sharp"} {...others} />);
}

export default Component;
