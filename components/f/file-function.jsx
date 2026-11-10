import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eugxuac1i.css';
import '../../css/i/iv5z46-8i.css';
import '../../css/n/n8kwgbyox.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eugxuac1i"/><path class="iv5z46-8i"/><path class="n8kwgbyox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-function"} {...others} />);
}

export default Component;
