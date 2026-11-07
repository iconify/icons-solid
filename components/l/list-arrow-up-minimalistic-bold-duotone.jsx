import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bdarr4bmq.css';
import '../../css/h/hqrr-dbpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bdarr4bmq"/><path class="hqrr-dbpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-up-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
