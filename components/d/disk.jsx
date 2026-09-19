import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/i11utwbak.css';
import '../../css/d/d3p-utluv.css';
import '../../css/h/ht8ohn1mx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcc8hxeop"><g class="rohhhzb0l"><path class="i11utwbak"/><path class="d3p-utluv"/><path class="ht8ohn1mx"/></g></mask></defs><path mask="url(#SVGcc8hxeop)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:disk"} {...others} />);
}

export default Component;
