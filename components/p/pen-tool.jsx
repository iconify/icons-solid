import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xsbisyb7v.css';
import '../../css/h/hvi2p9brq.css';
import '../../css/g/gowld48ws.css';
import '../../css/n/nf6jvzn5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a xsbisyb7v"/><path class="hvi2p9brq wm-a"/><path class="gowld48ws wm-a"/><path class="nf6jvzn5h wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:pen-tool"} {...others} />);
}

export default Component;
