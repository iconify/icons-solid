import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s90tedchv.css';
import '../../css/j/jdpagb2-o.css';
import '../../css/m/mam2srhpb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s90tedchv"/><path class="jdpagb2-o"/><path class="mam2srhpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:taiga-light"} {...others} />);
}

export default Component;
