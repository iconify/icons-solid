import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eugxuac1i.css';
import '../../css/g/gz2a2vbxa.css';
import '../../css/a/ab4gy8b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eugxuac1i"/><path class="gz2a2vbxa"/><path class="ab4gy8b8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-paper-clip"} {...others} />);
}

export default Component;
