import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lsgw33bdq {
  fill: currentColor;
  d: path("M4 2h16a1 1 0 0 1 1 1v7c-.001 5.712-3.495 9.647-8.594 11.914a1 1 0 0 1-.812 0C6.495 19.647 3.001 15.712 3 10V3a1 1 0 0 1 1-1m8 4a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2Zm1 4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0Z");
}
</style><path class="lsgw33bdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shield-info-fill-sharp"} {...others} />);
}

export default Component;
