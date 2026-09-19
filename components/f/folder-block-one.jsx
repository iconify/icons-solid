import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/p/pkah8qp_v.css';
import '../../css/q/qyprq1f6b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZSPNqdue"><g class="rohhhzb0l"><path class="rjn-u5bcv"/><circle class="pkah8qp_v"/><path class="qyprq1f6b"/></g></mask></defs><path mask="url(#SVGZSPNqdue)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-block-one"} {...others} />);
}

export default Component;
