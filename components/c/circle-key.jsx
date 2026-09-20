import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ypka-nb4x.css';
import '../../css/n/n04szjpnk.css';
import '../../css/b/b1asx0uox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ypka-nb4x"/><path class="n04szjpnk"/><path class="b1asx0uox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-key"} {...others} />);
}

export default Component;
