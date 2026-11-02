import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.er3-szkyi {
  fill: currentColor;
  d: path("M13 9v6a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0");
}
</style><path class="er3-szkyi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:divider-small-fill-sharp"} {...others} />);
}

export default Component;
