import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw46dbp2r.css';
import '../../css/y/y8e-4bcjq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qw46dbp2r"/><path class="y8e-4bcjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:libredb-studio-light"} {...others} />);
}

export default Component;
