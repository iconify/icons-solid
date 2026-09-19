import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/k/kmeqsm6xb.css';
import '../../css/x/xji954c1a.css';
import '../../css/v/vekwe-1ik.css';
import '../../css/m/mo94rtywa.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGG9edzcsD"><g class="rohhhzb0l"><circle class="kmeqsm6xb"/><path class="xji954c1a"/><circle class="vekwe-1ik"/><path class="mo94rtywa"/></g></mask></defs><path mask="url(#SVGG9edzcsD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:glasses-three"} {...others} />);
}

export default Component;
