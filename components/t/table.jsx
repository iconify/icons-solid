import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w91q8kr_q.css';
import '../../css/h/hio0vubtf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="w91q8kr_q"/><rect class="hio0vubtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:table"} {...others} />);
}

export default Component;
