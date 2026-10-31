import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vnkp_xh6x.css';
import '../../css/t/tkd7msb-v.css';
import '../../css/z/z1kmvobcf.css';
import '../../css/a/a73ygh56a.css';
import '../../css/j/j55m_-bae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vnkp_xh6x wm-shadow"/><path class="tkd7msb-v wm-shadow"/><path class="z1kmvobcf"/><path class="a73ygh56a"/><path class="j55m_-bae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:folder-tree"} {...others} />);
}

export default Component;
