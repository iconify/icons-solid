import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/b/bh_y89zfc.css';
import '../../css/g/gcqt0jbmj.css';
import '../../css/b/byxdlpbyc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMTragcDv"><g class="rohhhzb0l"><path class="bh_y89zfc"/><path class="gcqt0jbmj"/><path class="byxdlpbyc"/></g></mask></defs><path mask="url(#SVGMTragcDv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:cake"} {...others} />);
}

export default Component;
