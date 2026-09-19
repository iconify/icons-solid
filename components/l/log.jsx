import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/avy43kb9v.css';
import '../../css/b/bjqrrbbpt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLS4xbb9f"><g class="v3_i3wktz"><path class="avy43kb9v"/><path class="bjqrrbbpt"/></g></mask></defs><path mask="url(#SVGLS4xbb9f)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:log"} {...others} />);
}

export default Component;
