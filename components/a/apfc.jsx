import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jwa0srrrn.css';
import '../../css/h/hln7w7bkw.css';
import '../../css/e/e1ys6tb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jwa0srrrn"/><path class="hln7w7bkw"/><path class="e1ys6tb9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:apfc"} {...others} />);
}

export default Component;
