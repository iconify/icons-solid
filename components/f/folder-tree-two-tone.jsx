import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/ni2yci9vp.css';
import '../../css/m/mqielvbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ni2yci9vp"/><path class="mqielvbfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:folder-tree-two-tone"} {...others} />);
}

export default Component;
