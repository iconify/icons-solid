import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnhbskd2a.css';
import '../../css/s/s7sodr5-h.css';
import '../../css/z/zji9g8ohv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tnhbskd2a"/><path class="s7sodr5-h"/><path class="zji9g8ohv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:trailarr-dark"} {...others} />);
}

export default Component;
