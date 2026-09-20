import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hhyy_kb5v.css';
import '../../css/u/unky6y77u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hhyy_kb5v"/><path class="unky6y77u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:app-window-cursor"} {...others} />);
}

export default Component;
