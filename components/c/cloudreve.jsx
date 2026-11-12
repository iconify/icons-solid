import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6szscc-u.css';
import '../../css/w/w5t1ykp4g.css';
import '../../css/s/slveivbkv.css';
import '../../css/l/l4067mbwa.css';
import '../../css/q/qopzznmys.css';
import '../../css/g/gep5gvj9y.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="w6szscc-u"/><path class="w5t1ykp4g"/><path class="slveivbkv"/><circle class="l4067mbwa"/><path class="qopzznmys"/><path class="gep5gvj9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudreve"} {...others} />);
}

export default Component;
