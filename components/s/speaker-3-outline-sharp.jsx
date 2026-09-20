import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zc0s-qbln {
  fill: currentColor;
  d: path("M6 19h12V4H6zm2 3v-1H4V2h16v19h-4v1zm4-10.5");
}
</style><path class="zc0s-qbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speaker-3-outline-sharp"} {...others} />);
}

export default Component;
