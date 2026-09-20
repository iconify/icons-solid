import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddndqqb9g {
  fill: currentColor;
  d: path("M21.325 18.475L5.85 3H22v15.475zm-18.15-15.3v2.8L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-4.3-4.3H16v2H8v-2H2V3.175z");
}
</style><path class="ddndqqb9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tv-off-sharp"} {...others} />);
}

export default Component;
