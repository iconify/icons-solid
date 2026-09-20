import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/h/hwmbisf9i.css';
import '../../css/n/n9542da1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><path class="hwmbisf9i"/><path class="n9542da1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bug-duotone"} {...others} />);
}

export default Component;
