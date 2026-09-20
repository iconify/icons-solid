import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/i/ien4cgbpu.css';
import '../../css/j/j6u-dee6r.css';
import '../../css/n/nkq3pkbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="ien4cgbpu"/><path class="j6u-dee6r"/><path class="nkq3pkbxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bill-dollar-1"} {...others} />);
}

export default Component;
