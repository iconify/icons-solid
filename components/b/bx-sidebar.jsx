import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sslr2nb7i.css';
import '../../css/y/y36i_nbgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sslr2nb7i"/><path class="y36i_nbgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-sidebar"} {...others} />);
}

export default Component;
