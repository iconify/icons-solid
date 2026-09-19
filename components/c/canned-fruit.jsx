import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/o/ood7b4x1k.css';
import '../../css/i/ia6zp40mg.css';
import '../../css/n/nldb4o1zg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGTZ5I1b7D"><g class="rohhhzb0l"><path class="ood7b4x1k"/><path class="ia6zp40mg"/><path class="nldb4o1zg"/></g></mask></defs><path mask="url(#SVGTZ5I1b7D)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:canned-fruit"} {...others} />);
}

export default Component;
