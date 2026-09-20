import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sne2kdbsx.css';
import '../../css/z/zd0f3cbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sne2kdbsx"/><path class="zd0f3cbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:undo-left-line-duotone"} {...others} />);
}

export default Component;
