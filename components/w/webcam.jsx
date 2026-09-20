import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/w/w0qk0ibpf.css';
import '../../css/k/kql_pq4ud.css';
import '../../css/n/nh5zb3b5j.css';
import '../../css/v/v2pc336hk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="w0qk0ibpf"/><path class="kql_pq4ud"/><path class="nh5zb3b5j"/><path class="v2pc336hk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:webcam"} {...others} />);
}

export default Component;
