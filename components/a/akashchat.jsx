import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/in-rbubht.css';
import '../../css/d/d5g7v93rt.css';
import '../../css/m/m8-ll6bmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="in-rbubht"/><path class="d5g7v93rt"/><path class="m8-ll6bmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:akashchat"} {...others} />);
}

export default Component;
