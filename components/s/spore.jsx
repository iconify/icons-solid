import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrpqwnbxi.css';
import '../../css/p/prp34yb0x.css';
import '../../css/x/xvfbmtxag.css';
import '../../css/n/ncu31cbcd.css';
import '../../css/e/e82q6tbic.css';
import '../../css/o/o2fh95box.css';
import '../../css/y/yz31hdb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrpqwnbxi"/><path class="prp34yb0x"/><path class="xvfbmtxag"/><path class="ncu31cbcd"/><path class="e82q6tbic"/><path class="o2fh95box"/><path class="yz31hdb4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:spore"} {...others} />);
}

export default Component;
