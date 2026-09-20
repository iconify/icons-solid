import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm2utoh2v.css';
import '../../css/b/bubzgdclu.css';

const viewBox = {"width":25,"height":25};
const content = `<path class="bm2utoh2v"/><path class="bubzgdclu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:angle-double-left"} {...others} />);
}

export default Component;
