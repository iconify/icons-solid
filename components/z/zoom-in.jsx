import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/up1479bcz.css';
import '../../css/n/nxbjncgfc.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="up1479bcz"/><path class="nxbjncgfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:zoom-in"} {...others} />);
}

export default Component;
