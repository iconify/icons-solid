import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.txpx86zyv {
  fill: currentColor;
  d: path("M8 19h1.5v-6.75q.65-.2 1.075-.712T11 10.3V6.5h-1V9h-.75V6.5h-1V9H7.5V6.5h-1v3.8q0 .725.425 1.238T8 12.25zm6 0h1.5v-6.35q.825-.4 1.288-1.275t.462-2.05q0-1.425-.712-2.375T14.75 6t-1.787.95t-.713 2.375q0 1.175.463 2.05T14 12.65zM2 22V2h20v20zm2-2h16V4H4zm0 0V4z");
}
</style><path class="txpx86zyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dining-outline-sharp"} {...others} />);
}

export default Component;
