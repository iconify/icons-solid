import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b0zd-yb1a.css';
import '../../css/r/rz6a6db_c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b0zd-yb1a"/><path class="rz6a6db_c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-dislike"} {...others} />);
}

export default Component;
