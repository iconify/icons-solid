import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.khalxmbbj {
  fill: currentColor;
  d: path("M16 3h1v5h-1zm-1 2h-2V4h2V3h-3v3h2v1h-2v1h3zm3-2v5h1V6h2V3zm2 2h-1V4h1zm1 10.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z");
}
</style><path class="khalxmbbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-dialer-sip"} {...others} />);
}

export default Component;
