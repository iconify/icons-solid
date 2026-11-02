import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m6oh2umiq {
  fill: currentColor;
  d: path("M20 5a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-6 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm6 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm-6 4a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Z");
}
</style><path class="m6oh2umiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-align-left-bulk-sharp"} {...others} />);
}

export default Component;
