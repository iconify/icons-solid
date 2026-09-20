import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.h6w7z6bpn {
  fill: currentColor;
  d: path("M64 80v96a8 8 0 0 1-16 0H8a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h40a8 8 0 0 1 16 0m192 8v80a8 8 0 0 1-8 8h-58.17a16 16 0 0 1-13.83 8h-64a16 16 0 0 1-13.83-8H84a4 4 0 0 1-4-4V84a4 4 0 0 1 4-4h14.17A16 16 0 0 1 112 72h64a16 16 0 0 1 13.83 8H248a8 8 0 0 1 8 8m-80 79.8V136h-32a8 8 0 0 1 0-16h32V88h-64v80h64z");
}
</style><path class="h6w7z6bpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:belt-fill"} {...others} />);
}

export default Component;
