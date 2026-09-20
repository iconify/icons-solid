import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ni2yci9vp.css';
import '../../css/z/zds66r9hy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ni2yci9vp"/><path class="zds66r9hy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-tree-duotone"} {...others} />);
}

export default Component;
