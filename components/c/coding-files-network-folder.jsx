import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/md5d6wjks.css';
import '../../css/h/h6ua7bamg.css';
import '../../css/y/y4z6hob_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="md5d6wjks"/><path class="h6ua7bamg"/><path class="y4z6hob_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:coding-files-network-folder"} {...others} />);
}

export default Component;
