import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv2k8ptcj.css';
import '../../css/d/d9yuvfbmn.css';
import '../../css/z/z3fjvlb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hv2k8ptcj"/><path class="d9yuvfbmn"/><path class="z3fjvlb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:vault-light"} {...others} />);
}

export default Component;
