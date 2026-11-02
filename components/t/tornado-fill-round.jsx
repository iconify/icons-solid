import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mzkuasbkk {
  fill: currentColor;
  d: path("M3 3h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m3 4h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2m3 4h10a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2m1 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2m1 4a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Z");
}
</style><path class="mzkuasbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tornado-fill-round"} {...others} />);
}

export default Component;
