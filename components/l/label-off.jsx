import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2u1atb-t {
  fill: currentColor;
  d: path("M18.925 16.075L6.85 4H15q.475 0 .9.213t.7.587L22 12zM20.5 23.3l-3.975-3.975q-.25.325-.6.5T15.15 20H4q-.825 0-1.412-.587T2 18V6q0-.275.063-.513t.187-.437L.7 3.5l1.4-1.4l19.8 19.8z");
}
</style><path class="z2u1atb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-off"} {...others} />);
}

export default Component;
