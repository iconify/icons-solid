import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5-3lngyq {
  fill: currentColor;
  d: path("M5 20.98V3.02h14v17.96zm1-9.48h4.5v-.77h3v.77H18V4.02H6zm0 1v7.48h12V12.5zm0 7.48h12z");
}
</style><path class="b5-3lngyq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sensor-window-outline-sharp"} {...others} />);
}

export default Component;
