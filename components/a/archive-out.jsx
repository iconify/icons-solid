import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwj-tdbmb.css';
import '../../css/x/xcy8lybpd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nwj-tdbmb"/><path class="xcy8lybpd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:archive-out"} {...others} />);
}

export default Component;
