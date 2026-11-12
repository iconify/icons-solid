import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg5uvza7z.css';
import '../../css/u/ualo8ccab.css';
import '../../css/w/w38m_pb8z.css';
import '../../css/t/tibt6ac4n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vg5uvza7z"/><path class="ualo8ccab"/><path class="w38m_pb8z"/><path class="tibt6ac4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-2020-light"} {...others} />);
}

export default Component;
