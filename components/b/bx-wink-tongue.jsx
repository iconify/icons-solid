import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wl03k-beh.css';
import '../../css/a/aog7vpb_z.css';
import '../../css/a/an0_1xo_x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wl03k-beh"/><path class="aog7vpb_z"/><circle class="an0_1xo_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-wink-tongue"} {...others} />);
}

export default Component;
