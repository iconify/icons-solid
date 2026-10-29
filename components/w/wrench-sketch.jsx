import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vdvfy6qjl.css';
import '../../css/l/l-1418vhh.css';
import '../../css/a/a1pvkxohd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="vdvfy6qjl"/><path class="l-1418vhh"/><path class="a1pvkxohd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:wrench-sketch"} {...others} />);
}

export default Component;
