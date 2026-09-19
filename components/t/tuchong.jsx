import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylrso7y3c.css';
import '../../css/j/ja8cnttar.css';
import '../../css/t/t4xl_0g8d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGWJKV4cVS"><g class="ylrso7y3c"><path class="ja8cnttar"/><path class="t4xl_0g8d"/></g></mask></defs><path mask="url(#SVGWJKV4cVS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tuchong"} {...others} />);
}

export default Component;
