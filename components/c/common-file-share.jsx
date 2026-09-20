import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0zkqiy7a.css';
import '../../css/s/sp1v4sh2k.css';
import '../../css/q/q2bbcrdly.css';
import '../../css/g/gu7l-hbfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j0zkqiy7a"/><path class="sp1v4sh2k"/><path class="q2bbcrdly"/><path class="gu7l-hbfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:common-file-share"} {...others} />);
}

export default Component;
