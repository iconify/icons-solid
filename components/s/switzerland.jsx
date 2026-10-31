import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wta7eoblc.css';
import '../../css/y/ywgw6ib8n.css';
import '../../css/o/o5mwc3v0t.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="wta7eoblc"/><path class="ywgw6ib8n"/><path class="o5mwc3v0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:switzerland"} {...others} />);
}

export default Component;
