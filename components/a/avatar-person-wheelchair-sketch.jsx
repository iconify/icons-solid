import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gt1o1xisn.css';
import '../../css/z/zuzzs3bke.css';
import '../../css/o/ot4dkg9sh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gt1o1xisn wm-a"/><path class="wm-k zuzzs3bke"/><path class="ot4dkg9sh wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-person-wheelchair-sketch"} {...others} />);
}

export default Component;
