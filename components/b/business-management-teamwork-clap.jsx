import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vja0l2bvg.css';
import '../../css/l/l3jb9k58e.css';
import '../../css/b/baz0habwe.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vja0l2bvg"/><path class="l3jb9k58e"/><path class="baz0habwe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-management-teamwork-clap"} {...others} />);
}

export default Component;
