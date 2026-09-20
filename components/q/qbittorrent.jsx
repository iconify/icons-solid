import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz_jw2b8r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rz_jw2b8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:qbittorrent"} {...others} />);
}

export default Component;
