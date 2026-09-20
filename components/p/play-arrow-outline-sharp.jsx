import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afg8anjae {
  fill: currentColor;
  d: path("M8 19V5l11 7zm2-3.65L15.25 12L10 8.65z");
}
</style><path class="afg8anjae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:play-arrow-outline-sharp"} {...others} />);
}

export default Component;
