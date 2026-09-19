import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ng5njjbyf.css';
import '../../css/l/l-g4ze3hi.css';
import '../../css/h/h6rwxxx8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ng5njjbyf"/><path class="l-g4ze3hi"/><path class="h6rwxxx8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:hotspot-outline"} {...others} />);
}

export default Component;
