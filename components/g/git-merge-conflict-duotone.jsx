import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xxpbxbbyq.css';
import '../../css/w/w2ttvibvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xxpbxbbyq"/><path class="w2ttvibvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:git-merge-conflict-duotone"} {...others} />);
}

export default Component;
