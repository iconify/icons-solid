import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd2-gvknj.css';
import '../../css/n/niw2nrbra.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vd2-gvknj"/><path class="niw2nrbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:facebook"} {...others} />);
}

export default Component;
