import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/ma3i4nbnb.css';
import '../../css/z/zpdyuobzf.css';
import '../../css/b/bv9t2ie8k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="ma3i4nbnb"/><path clip-rule="evenodd" class="zpdyuobzf"/><path class="bv9t2ie8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:leptonai"} {...others} />);
}

export default Component;
