import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1t-4526n {
  fill: currentColor;
  d: path("M19 9h-2v6.59L5.41 4L4 5.41L15.59 17H9v2h10z");
}
</style><path class="i1t-4526n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-south-east"} {...others} />);
}

export default Component;
