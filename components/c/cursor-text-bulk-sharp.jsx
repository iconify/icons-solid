import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sloqa5btn {
  fill: currentColor;
  d: path("M12 2h4a1 1 0 0 1 0 2h-3v16h3a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h3V4H8a1 1 0 0 1 0-2Z");
}
</style><path class="sloqa5btn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cursor-text-bulk-sharp"} {...others} />);
}

export default Component;
