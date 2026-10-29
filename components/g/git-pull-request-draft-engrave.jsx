import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r3jkyccgi.css';
import '../../css/n/na3y65y2i.css';
import '../../css/p/p0dvw-pkf.css';
import '../../css/g/gorsochjg.css';
import '../../css/b/b0q5uxwll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="r3jkyccgi wm-k"/><path class="na3y65y2i wm-a"/><path class="p0dvw-pkf wm-shadow"/><path class="gorsochjg wm-k"/><path class="b0q5uxwll wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:git-pull-request-draft-engrave"} {...others} />);
}

export default Component;
