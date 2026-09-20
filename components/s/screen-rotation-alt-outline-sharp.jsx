import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cdb0axbin {
  fill: currentColor;
  d: path("M13.6 22.8L3.75 13H6.6l7 7l5-5H16v-2h6v6h-2v-2.6zM2 11V5h2v2.6l6.4-6.4l9.85 9.8H17.4l-7-7l-5 5H8v2z");
}
</style><path class="cdb0axbin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screen-rotation-alt-outline-sharp"} {...others} />);
}

export default Component;
