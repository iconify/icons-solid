import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/t/to4dkwksy.css';
import '../../css/q/qbow9nb7d.css';
import '../../css/p/pic7lxbxy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLO8kycll"><g class="rohhhzb0l"><path class="to4dkwksy"/><circle class="qbow9nb7d"/><path class="pic7lxbxy"/></g></mask></defs><path mask="url(#SVGLO8kycll)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:message-search"} {...others} />);
}

export default Component;
