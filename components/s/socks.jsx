import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aks-r-baq.css';
import '../../css/q/qm97rya6y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aks-r-baq"/><path class="qm97rya6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:socks"} {...others} />);
}

export default Component;
