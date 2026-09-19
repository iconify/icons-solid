import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2tzcybje {
  fill: currentColor;
  d: path("M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m8 14H6c-.55 0-1-.45-1-1v-5h5c.55 0 1 .45 1 1zm-1-8H5V6c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m8 8h-5v-5c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1m1-8h-5c-.55 0-1-.45-1-1V5h5c.55 0 1 .45 1 1z");
}
</style><path class="v2tzcybje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-border-all"} {...others} />);
}

export default Component;
