import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/whmpjxefc.css';
import '../../css/l/lfghc9-gy.css';
import '../../css/x/xs_-ubcxl.css';
import '../../css/q/qy5qlq-tp.css';
import '../../css/t/t9mbxobpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="whmpjxefc"/><path class="lfghc9-gy"/><path class="xs_-ubcxl"/><path class="qy5qlq-tp"/><path class="t9mbxobpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wad-of-money-line-duotone"} {...others} />);
}

export default Component;
