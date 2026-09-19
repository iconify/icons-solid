import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx5ltho2y.css';
import '../../css/x/xoymbvb-h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kx5ltho2y"/><path class="xoymbvb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:video-call"} {...others} />);
}

export default Component;
