import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k46bqabvm.css';
import '../../css/i/iqzoboglm.css';
import '../../css/t/tvdh9jgjx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k46bqabvm"/><path class="iqzoboglm"/><path class="tvdh9jgjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-manager"} {...others} />);
}

export default Component;
