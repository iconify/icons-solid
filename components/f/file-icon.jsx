import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/p/po4pmpbrx.css';
import '../../css/u/u-gp5oztk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="po4pmpbrx"/><path class="u-gp5oztk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-icon"} {...others} />);
}

export default Component;
