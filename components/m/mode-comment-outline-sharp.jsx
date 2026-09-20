import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ln-fcwbuf {
  fill: currentColor;
  d: path("M2 18V2h20v20l-4-4zm2-2h14.85L20 17.125V4H4zm0 0V4z");
}
</style><path class="ln-fcwbuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:mode-comment-outline-sharp"} {...others} />);
}

export default Component;
