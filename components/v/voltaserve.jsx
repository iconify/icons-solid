import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iycln-b8i.css';
import '../../css/v/vmwphib4h.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="iycln-b8i"/><path class="vmwphib4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:voltaserve"} {...others} />);
}

export default Component;
