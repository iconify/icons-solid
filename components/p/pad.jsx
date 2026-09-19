import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w0tgaubdo.css';
import '../../css/p/poacj3ecw.css';
import '../../css/v/vtcnsjnlh.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="w0tgaubdo"/><path class="poacj3ecw"/><path class="vtcnsjnlh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:pad"} {...others} />);
}

export default Component;
