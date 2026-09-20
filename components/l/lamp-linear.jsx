import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/a/a-4dztb1w.css';
import '../../css/q/q54d_4iej.css';
import '../../css/v/vnmkxmasi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="a-4dztb1w"/><path class="q54d_4iej"/><path class="vnmkxmasi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lamp-linear"} {...others} />);
}

export default Component;
