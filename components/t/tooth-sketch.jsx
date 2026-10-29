import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tpbfs-n7q.css';
import '../../css/b/b4mimu6xf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="tpbfs-n7q"/><path class="b4mimu6xf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:tooth-sketch"} {...others} />);
}

export default Component;
