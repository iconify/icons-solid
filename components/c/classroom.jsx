import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/n/ndk9cuncu.css';
import '../../css/g/gq8g9_bnj.css';
import '../../css/w/wsl0tzbfj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><circle class="ndk9cuncu"/><path class="gq8g9_bnj"/><path class="wsl0tzbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:classroom"} {...others} />);
}

export default Component;
