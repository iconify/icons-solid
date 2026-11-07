import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bt1a48lct.css';
import '../../css/z/z019-jv4q.css';
import '../../css/u/uam-iwbek.css';
import '../../css/w/wqfg_ypqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bt1a48lct"/><path class="z019-jv4q"/><path class="uam-iwbek"/><path class="wqfg_ypqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-2-bold-duotone"} {...others} />);
}

export default Component;
