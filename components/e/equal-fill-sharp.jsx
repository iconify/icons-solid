import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bhqsqi7qs {
  fill: currentColor;
  d: path("M18 8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Zm0 6a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="bhqsqi7qs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:equal-fill-sharp"} {...others} />);
}

export default Component;
