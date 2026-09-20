import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yxdcyqb2j.css';
import '../../css/w/w9qv6abzt.css';
import '../../css/y/yngktqmfb.css';
import '../../css/o/oj8ptcbxd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yxdcyqb2j"/><path class="w9qv6abzt"/><path class="yngktqmfb"/><path class="oj8ptcbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:phone-qr"} {...others} />);
}

export default Component;
