import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzla5f-tc.css';
import '../../css/g/gw3y6so7m.css';
import '../../css/n/noxr8smkm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzla5f-tc"/><path class="gw3y6so7m"/><path class="noxr8smkm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:rainbow"} {...others} />);
}

export default Component;
