import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zwn674mhx {
  fill: currentColor;
  d: path("M13 4L2 20h17l3-16zm1.5 10a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="zwn674mhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-airlines"} {...others} />);
}

export default Component;
