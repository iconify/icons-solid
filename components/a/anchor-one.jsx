import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zob6rkzyb.css';
import '../../css/q/q_93exoms.css';
import '../../css/j/jck9mcb1g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXRFt1c2X"><g class="v3_i3wktz"><path class="zob6rkzyb"/><path class="q_93exoms"/><path class="jck9mcb1g"/></g></mask></defs><path mask="url(#SVGXRFt1c2X)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:anchor-one"} {...others} />);
}

export default Component;
