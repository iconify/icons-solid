import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/a_5ae769w.css';
import '../../css/p/p57t2dkbq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGpMgSGkd"><g class="rohhhzb0l"><path class="a_5ae769w"/><path class="p57t2dkbq"/></g></mask></defs><path mask="url(#SVGGpMgSGkd)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:gas"} {...others} />);
}

export default Component;
