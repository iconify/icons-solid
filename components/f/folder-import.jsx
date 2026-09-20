import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/m/m7thfq2fv.css';
import '../../css/d/d9p6_wbkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="m7thfq2fv"/><path class="d9p6_wbkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:folder-import"} {...others} />);
}

export default Component;
