import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5p876b5i.css';
import '../../css/v/vwv3t9bhq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x5p876b5i"/><path class="vwv3t9bhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:quire-ink-dark"} {...others} />);
}

export default Component;
