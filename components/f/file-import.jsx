import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnlw9tbfh.css';
import '../../css/r/rdg5s2amp.css';
import '../../css/w/wkck6fb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pnlw9tbfh"/><path class="rdg5s2amp"/><path class="wkck6fb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:file-import"} {...others} />);
}

export default Component;
