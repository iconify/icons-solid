import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bry-7ebgg {
  fill: currentColor;
  d: path("M2 20V4h20v16zm4-4h12l-3.75-5l-3 4L9 12z");
}
</style><path class="bry-7ebgg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:panorama-sharp"} {...others} />);
}

export default Component;
