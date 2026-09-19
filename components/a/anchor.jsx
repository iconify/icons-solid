import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/e/eptqnp95c.css';
import '../../css/a/ag-22xndv.css';
import '../../css/d/d0tt-4lfb.css';
import '../../css/c/crez2obcq.css';
import '../../css/n/nlpb6jbro.css';
import '../../css/a/a9bp5w-wm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGT8gdwcvk"><g class="rohhhzb0l"><path class="eptqnp95c"/><rect class="ag-22xndv"/><rect class="d0tt-4lfb"/><rect class="crez2obcq"/><rect class="nlpb6jbro"/><path class="a9bp5w-wm"/></g></mask></defs><path mask="url(#SVGT8gdwcvk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:anchor"} {...others} />);
}

export default Component;
