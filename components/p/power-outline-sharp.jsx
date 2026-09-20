import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gveijgajs {
  fill: currentColor;
  d: path("M11.5 19h1v-1.85l3.5-3.5V9H8v4.65l3.5 3.5zm-2 2v-3L6 14.5V7h2V3h2v4h4V3h2v4h2v7.5L14.5 18v3zm2.5-7");
}
</style><path class="gveijgajs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:power-outline-sharp"} {...others} />);
}

export default Component;
