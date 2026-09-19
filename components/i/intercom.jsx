import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/iivrh9bio.css';
import '../../css/x/xm85kvbbe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGpMNVHdBy"><g class="rohhhzb0l"><path class="iivrh9bio"/><path class="xm85kvbbe"/></g></mask></defs><path mask="url(#SVGpMNVHdBy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:intercom"} {...others} />);
}

export default Component;
