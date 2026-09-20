import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/ko5m8cp9r.css';
import '../../css/y/ydev6gb7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ko5m8cp9r"/><path class="ydev6gb7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-output"} {...others} />);
}

export default Component;
