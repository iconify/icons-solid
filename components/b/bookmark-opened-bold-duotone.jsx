import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qezl_db6b.css';
import '../../css/n/nd3ezlbjr.css';
import '../../css/m/m-izqibkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qezl_db6b"/><path class="nd3ezlbjr"/><path class="m-izqibkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-opened-bold-duotone"} {...others} />);
}

export default Component;
