import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c39303b3x.css';
import '../../css/g/gdbv4de5j.css';
import '../../css/t/tcxp3ubtd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c39303b3x"/><path class="gdbv4de5j"/><path class="tcxp3ubtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallet-2-bold-duotone"} {...others} />);
}

export default Component;
