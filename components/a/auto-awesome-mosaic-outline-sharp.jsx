import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kzxh6ub8g {
  fill: currentColor;
  d: path("M11 21H3V3h8zm-2-2V5H5v14zm4-8V3h8v8zm2-2h4V5h-4zm-2 12v-8h8v8zm2-2h4v-4h-4zm0-4");
}
</style><path class="kzxh6ub8g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-awesome-mosaic-outline-sharp"} {...others} />);
}

export default Component;
