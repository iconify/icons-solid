import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/u4ajsubal.css';
import '../../css/a/aouwyouvc.css';
import '../../css/f/f81lr3bmn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzZDDPcyC"><g class="rohhhzb0l"><rect class="u4ajsubal"/><circle class="aouwyouvc"/><path class="f81lr3bmn"/></g></mask></defs><path mask="url(#SVGzZDDPcyC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:radio"} {...others} />);
}

export default Component;
