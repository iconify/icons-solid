import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/em4p7ebsc.css';
import '../../css/g/gvvqoiecn.css';
import '../../css/m/m96qynxnf.css';
import '../../css/x/xta0e3bxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="em4p7ebsc wm-k"/><path class="gvvqoiecn wm-a"/><path class="m96qynxnf"/><path class="xta0e3bxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:popcorn"} {...others} />);
}

export default Component;
