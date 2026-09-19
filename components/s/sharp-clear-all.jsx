import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c--36ycir {
  fill: currentColor;
  d: path("M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z");
}
</style><path class="c--36ycir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-clear-all"} {...others} />);
}

export default Component;
