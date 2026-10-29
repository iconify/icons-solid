import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mjrcyhbre.css';
import '../../css/n/nk83n3bbi.css';
import '../../css/e/esa1d30xi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mjrcyhbre"/><path class="nk83n3bbi"/><path class="esa1d30xi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-question"} {...others} />);
}

export default Component;
