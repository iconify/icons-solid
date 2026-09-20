import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.td9wy-b2z {
  fill: currentColor;
  d: path("M6 11h1.5V9H6zm2.5 2H10V7H8.5zm2.75 2h1.5V5h-1.5zM14 13h1.5V7H14zm2.5-2H18V9h-1.5zM2 22V2h20v16H6z");
}
</style><path class="td9wy-b2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:voice-chat-sharp"} {...others} />);
}

export default Component;
