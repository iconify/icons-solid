import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n9y477w0i.css';
import '../../css/w/wwbiboy9e.css';
import '../../css/b/b1a3x4bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="n9y477w0i"/><path class="wwbiboy9e"/><path class="b1a3x4bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifier-zoom-in-bold-duotone"} {...others} />);
}

export default Component;
