import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t47bc6bdn.css';
import '../../css/z/ztni599nj.css';
import '../../css/n/n2_771bjc.css';
import '../../css/w/wqyg2xbwc.css';
import '../../css/d/drphy1bum.css';
import '../../css/p/p93bg8bpw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="t47bc6bdn"/><g class="ztni599nj"><circle class="n2_771bjc"/><path class="wqyg2xbwc"/><path class="drphy1bum"/><path class="p93bg8bpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:weary-face"} {...others} />);
}

export default Component;
