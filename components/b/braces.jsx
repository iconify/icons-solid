import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/gnsy7-bph.css';
import '../../css/d/d_-ywfb3l.css';
import '../../css/a/a-v8cwb1o.css';
import '../../css/q/qcjbof0wc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="gnsy7-bph wm-shadow"/><path class="d_-ywfb3l wm-shadow"/><path class="a-v8cwb1o"/><path class="qcjbof0wc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:braces"} {...others} />);
}

export default Component;
