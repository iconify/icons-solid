import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/k/kpvsov5-h.css';
import '../../css/o/ob_54lbpg.css';
import '../../css/d/dtkxror1v.css';
import '../../css/i/iuiglo4ta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGR7XHoc8e"><g class="gopnm44um"><path class="kpvsov5-h"/><circle class="ob_54lbpg"/><path class="dtkxror1v"/><path class="iuiglo4ta"/></g></mask></defs><path mask="url(#SVGR7XHoc8e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:radio-nanny"} {...others} />);
}

export default Component;
