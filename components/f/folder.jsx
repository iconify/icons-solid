import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4ez60cxn.css';
import '../../css/l/ln6wynb2q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c4ez60cxn"/><path class="ln6wynb2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:folder"} {...others} />);
}

export default Component;
