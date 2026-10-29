import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zgprhql-v.css';
import '../../css/f/fvy03xbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zgprhql-v"/><path class="fvy03xbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sofa-sketch"} {...others} />);
}

export default Component;
