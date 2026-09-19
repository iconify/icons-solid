import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q3m8phb7e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.2 5.5h13.71l-3.432 5.386H42.5L26.744 32.407h13.7V42.5H5.5l16.444-22.2h-13.7z");
}
</style><path class="q3m8phb7e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:naver-game-streaming"} {...others} />);
}

export default Component;
