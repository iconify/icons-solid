import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/s29_b9bsi.css';
import '../../css/u/u03pt4bmq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="s29_b9bsi"/><path class="u03pt4bmq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:minus-sketch"} {...others} />);
}

export default Component;
