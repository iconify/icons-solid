import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/z/zitt59a-n.css';
import '../../css/t/txwxi5byh.css';
import '../../css/z/zlogiabyk.css';
import '../../css/l/l1u_1pbtl.css';
import '../../css/f/felotf44k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmCsltbXV"><g class="hv130ab-t"><path class="zitt59a-n"/><path class="txwxi5byh"/><path class="zlogiabyk"/><path class="l1u_1pbtl"/><path class="felotf44k"/></g></mask></defs><path mask="url(#SVGmCsltbXV)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:termination-file"} {...others} />);
}

export default Component;
