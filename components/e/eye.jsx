import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uxwj_xb5y.css';
import '../../css/z/zs13s_bpz.css';
import '../../css/x/xb15pwbqd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><circle class="uxwj_xb5y"/><circle class="zs13s_bpz"/><path class="xb15pwbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:eye"} {...others} />);
}

export default Component;
