import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4wgqhbsg {
  fill: currentColor;
  d: path("M8 23v-2h8v2zm8-6V3H8v14zM12 6q.425 0 .713-.288T13 5t-.288-.712T12 4t-.712.288T11 5t.288.713T12 6M8 3v14zM6 19V1h12v4.05h1v3.9h-1V19z");
}
</style><path class="n4wgqhbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dock-outline-sharp"} {...others} />);
}

export default Component;
