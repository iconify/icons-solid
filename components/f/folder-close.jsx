import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/q/qqiokb5mb.css';
import '../../css/x/x3fr-qpgw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGPf7KTOjh"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="qqiokb5mb"/><path class="x3fr-qpgw"/></g></mask></defs><path mask="url(#SVGPf7KTOjh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-close"} {...others} />);
}

export default Component;
