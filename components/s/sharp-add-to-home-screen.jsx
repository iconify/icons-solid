import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wpwzc7off {
  fill: currentColor;
  d: path("M20 1.01L6 1v5h2V5h10v14H8v-1H6v5h14zM10 15h2V8H5v2h3.59L3 15.59L4.41 17L10 11.41z");
}
</style><path class="wpwzc7off"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-add-to-home-screen"} {...others} />);
}

export default Component;
