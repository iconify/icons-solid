import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iyl502ght {
  fill: currentColor;
  d: path("M7 16.5h5v-1H7zM4 20V4h16v16zM9 5v6.962l3-1.5l3 1.5V5z");
}
</style><path class="iyl502ght"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:package-sharp"} {...others} />);
}

export default Component;
