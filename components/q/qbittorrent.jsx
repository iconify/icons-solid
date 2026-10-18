import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n03l_4bvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n03l_4bvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:qbittorrent"} {...others} />);
}

export default Component;
