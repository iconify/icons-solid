import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x0ambq6_r.css';
import '../../css/w/wsun1abzw.css';
import '../../css/l/levp3rh9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x0ambq6_r"/><path class="wsun1abzw"/><path class="levp3rh9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:programming-language-script-lock"} {...others} />);
}

export default Component;
