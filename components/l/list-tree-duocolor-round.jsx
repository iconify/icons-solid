import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/onff9kbcz.css';
import '../../css/a/auf36vbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="onff9kbcz"/><path class="auf36vbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-tree-duocolor-round"} {...others} />);
}

export default Component;
