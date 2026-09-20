import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.uwgu6g34z {
  fill: currentColor;
  d: path("M14.25 20c.69 0 1.25.56 1.25 1.25V25H6.75A3.75 3.75 0 0 1 3 21.25V20zm7-17A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H17v-3.75a2.75 2.75 0 0 0-2.75-2.75H3V6.75A3.75 3.75 0 0 1 6.75 3z");
}
</style><path class="uwgu6g34z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:tab-desktop-bottom-28-filled"} {...others} />);
}

export default Component;
