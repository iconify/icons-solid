import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nw2rdv9fo {
  fill: currentColor;
  d: path("M10 17.48L4.52 12L10 6.52zm-.885-2.124V8.644L5.76 12zM14 17.48V6.519L19.48 12z");
}
</style><path class="nw2rdv9fo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:switch-left-sharp"} {...others} />);
}

export default Component;
