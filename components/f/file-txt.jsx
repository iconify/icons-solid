import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/p/po4pmpbrx.css';
import '../../css/c/cqcz3vi1h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="po4pmpbrx"/><path class="cqcz3vi1h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:file-txt"} {...others} />);
}

export default Component;
