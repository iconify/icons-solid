import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8eofbb0i.css';
import '../../css/j/j1npajbrz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z8eofbb0i"/><path class="j1npajbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:folder-key"} {...others} />);
}

export default Component;
