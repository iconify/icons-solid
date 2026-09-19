import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgz6g14qr.css';
import '../../css/b/bwy1ik_nx.css';

const viewBox = {"width":17,"height":24};
const content = `<path class="wgz6g14qr"/><path class="bwy1ik_nx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:motorcycle"} {...others} />);
}

export default Component;
