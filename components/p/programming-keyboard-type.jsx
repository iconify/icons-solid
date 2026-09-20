import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qz7834b2q.css';
import '../../css/y/yyuotdb-q.css';
import '../../css/w/wt7ssrb3a.css';
import '../../css/i/i1_0w0bcy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qz7834b2q"/><path class="yyuotdb-q"/><path class="wt7ssrb3a"/><path class="i1_0w0bcy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:programming-keyboard-type"} {...others} />);
}

export default Component;
