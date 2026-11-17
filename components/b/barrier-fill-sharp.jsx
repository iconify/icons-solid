import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hqunp2bzn {
  fill: currentColor;
  d: path("M3.707 6.293L3.414 6h3.172l.291.292l.002.001L14.586 14h-3.172l-.291-.292l-.002-.001Zm12 0L15.414 6H21a1 1 0 0 1 1 1v5.586ZM9.414 6h3.172l8 8H20v3h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1v-3h-.586l-.291-.291l-.002-.002Zm-1.121 7.707l.293.293H6v3h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1v-3H3a1 1 0 0 1-1-1V7.414Z");
}
</style><path class="hqunp2bzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:barrier-fill-sharp"} {...others} />);
}

export default Component;
