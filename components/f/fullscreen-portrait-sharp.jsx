import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y353gab5e {
  fill: currentColor;
  d: path("M8 18h8V6H8zm12 4H4V2h16z");
}
</style><path class="y353gab5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fullscreen-portrait-sharp"} {...others} />);
}

export default Component;
