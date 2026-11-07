import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kb7pjtbyk.css';
import '../../css/t/t8atl23et.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/i/ik91aybia.css';
import '../../css/n/ntcy9jf7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kb7pjtbyk"/><path class="t8atl23et"/><g class="xtpeb-edw"><path class="ik91aybia"/><path class="ntcy9jf7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-from-bottom-to-top-bold-duotone"} {...others} />);
}

export default Component;
