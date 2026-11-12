import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-hw-5bzi.css';
import '../../css/m/mtxmfcb5x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q-hw-5bzi"/><path class="mtxmfcb5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:maildev-light"} {...others} />);
}

export default Component;
