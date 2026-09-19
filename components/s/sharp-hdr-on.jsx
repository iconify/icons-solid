import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g0j8dtbts {
  fill: currentColor;
  d: path("M21 12.9V9h-5v6h1.5v-2h1.1l.9 2H21l-.9-2.1zm-1.5-1.4h-2v-1h2zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5h-2v-3h2z");
}
</style><path class="g0j8dtbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-hdr-on"} {...others} />);
}

export default Component;
