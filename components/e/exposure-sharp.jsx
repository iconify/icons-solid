import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vx04fzb3z {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5zm9.5-1v-2h-2v-1.5h2v-2H16v2h2V16h-2v2zM6 8.5h5V7H6z");
}
</style><path class="vx04fzb3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:exposure-sharp"} {...others} />);
}

export default Component;
