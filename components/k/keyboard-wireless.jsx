import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wg6bousnl.css';
import '../../css/w/w91y0mr_u.css';
import '../../css/n/n3og0kbfk.css';
import '../../css/c/c_94xbj6p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wg6bousnl"/><path class="w91y0mr_u"/><path class="n3og0kbfk"/><path class="c_94xbj6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:keyboard-wireless"} {...others} />);
}

export default Component;
