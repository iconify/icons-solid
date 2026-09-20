import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/djw9-2b1i.css';
import '../../css/s/sp7l-g4-y.css';
import '../../css/o/o4he8kb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="djw9-2b1i"/><path class="sp7l-g4-y"/><path class="o4he8kb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-open-line-duotone"} {...others} />);
}

export default Component;
