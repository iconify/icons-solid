import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bni5ewbaj.css';
import '../../css/i/ijl_iqh9b.css';
import '../../css/x/xf75twbif.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bni5ewbaj"/><path class="ijl_iqh9b"/><path class="xf75twbif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:coding-file-iso-tag"} {...others} />);
}

export default Component;
