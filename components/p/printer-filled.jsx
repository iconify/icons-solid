import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n8sovnz4j.css';
import '../../css/o/obpt3dxcu.css';
import '../../css/u/u97m_wqmn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="n8sovnz4j"/><path class="obpt3dxcu"/><path clip-rule="evenodd" class="u97m_wqmn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:printer-filled"} {...others} />);
}

export default Component;
