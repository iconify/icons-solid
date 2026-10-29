import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f6hzsib7i.css';
import '../../css/u/uyydohbvy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="f6hzsib7i"/><path class="uyydohbvy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:menu-sketch"} {...others} />);
}

export default Component;
