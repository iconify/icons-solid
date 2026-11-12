import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpwrxkbxn.css';
import '../../css/n/n7vgj_bwu.css';
import '../../css/d/d7g9unbzb.css';
import '../../css/z/zc6m5o--n.css';
import '../../css/w/w3nvhyzat.css';
import '../../css/f/fdn77cona.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mpwrxkbxn"/><path class="n7vgj_bwu"/><path class="d7g9unbzb"/><path class="zc6m5o--n"/><path class="w3nvhyzat"/><path class="fdn77cona"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pigeonpod-dark"} {...others} />);
}

export default Component;
