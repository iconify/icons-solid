import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxm40qhvn.css';
import '../../css/a/alf2ikb1h.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="lxm40qhvn"/><path clip-rule="evenodd" class="alf2ikb1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:download-circle-1"} {...others} />);
}

export default Component;
