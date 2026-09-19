import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv-jkn1sc.css';
import '../../css/z/zz0-pccgs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nv-jkn1sc"/><path class="zz0-pccgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:bug"} {...others} />);
}

export default Component;
