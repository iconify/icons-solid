import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyl5x0xhs.css';
import '../../css/u/udu2-jboo.css';
import '../../css/i/i0745hb7h.css';
import '../../css/x/xl1d1vb_i.css';
import '../../css/u/ubf44wbel.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k xyl5x0xhs"/><path class="udu2-jboo wm-a"/><path class="i0745hb7h wm-a"/><path class="wm-a xl1d1vb_i"/><path class="ubf44wbel wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:qr-code"} {...others} />);
}

export default Component;
