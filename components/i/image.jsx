import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/gaeaejbpf.css';
import '../../css/h/hpos-4btv.css';
import '../../css/o/ou9b6zecu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="gaeaejbpf"/><path class="hpos-4btv"/><path class="ou9b6zecu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:image"} {...others} />);
}

export default Component;
