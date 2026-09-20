import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxp3iactp.css';
import '../../css/h/hy2z1dbou.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="cxp3iactp"/><path class="hy2z1dbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:popup"} {...others} />);
}

export default Component;
