import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/nzjzxhpzc.css';
import '../../css/b/b4e1vu05k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="nzjzxhpzc wm-k"/><path class="b4e1vu05k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rangoli-pattern"} {...others} />);
}

export default Component;
