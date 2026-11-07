import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnb90nbxf.css';
import '../../css/n/nqs92bb2p.css';
import '../../css/i/ijcx_p_-b.css';
import '../../css/o/o7_qo9bal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rnb90nbxf"/><path class="nqs92bb2p"/><path class="ijcx_p_-b"/><path class="o7_qo9bal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:emoji-funny-circle-bold-duotone"} {...others} />);
}

export default Component;
