import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msnkf_bkn.css';
import '../../css/k/kq5sxkbvs.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="msnkf_bkn"/><path class="kq5sxkbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:ecosystem"} {...others} />);
}

export default Component;
