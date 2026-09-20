import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/g/goex19x9j.css';
import '../../css/u/uuvf3rj3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="goex19x9j"/><path class="uuvf3rj3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-restore"} {...others} />);
}

export default Component;
