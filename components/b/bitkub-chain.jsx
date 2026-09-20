import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rex75jb-y.css';
import '../../css/c/cv_qrx7lo.css';
import '../../css/k/kn5t4v-6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rex75jb-y"/><path class="cv_qrx7lo"/><path class="kn5t4v-6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bitkub-chain"} {...others} />);
}

export default Component;
