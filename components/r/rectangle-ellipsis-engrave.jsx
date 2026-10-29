import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/irdladc7r.css';
import '../../css/l/l6l1smxsb.css';
import '../../css/x/xw_me4vft.css';
import '../../css/g/g2qaiez3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="irdladc7r wm-k"/><path class="l6l1smxsb wm-shadow"/><path class="wm-k xw_me4vft"/><path class="g2qaiez3p wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rectangle-ellipsis-engrave"} {...others} />);
}

export default Component;
