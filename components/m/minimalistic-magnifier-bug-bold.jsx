import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b-jkxsbde.css';
import '../../css/v/v2xfabcfj.css';
import '../../css/w/w05w1wx4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b-jkxsbde"/><path class="v2xfabcfj"/><path class="w05w1wx4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifier-bug-bold"} {...others} />);
}

export default Component;
