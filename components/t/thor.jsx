import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwsaykppo.css';
import '../../css/a/afpdyh0xp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwsaykppo"/><path class="afpdyh0xp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:thor"} {...others} />);
}

export default Component;
