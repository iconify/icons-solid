import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp1h2bbup.css';
import '../../css/v/vcbva_jjq.css';
import '../../css/y/ya37qbble.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xp1h2bbup"/><path class="vcbva_jjq"/><path class="ya37qbble"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-locker-light"} {...others} />);
}

export default Component;
