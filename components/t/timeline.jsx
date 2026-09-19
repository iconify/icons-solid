import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ubuhrcbxb.css';
import '../../css/h/hrxogvq4w.css';
import '../../css/h/hayvu4isb.css';
import '../../css/b/bwxghiblf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5esZzcUE"><g class="rohhhzb0l"><path class="ubuhrcbxb"/><path class="hrxogvq4w"/><path class="hayvu4isb"/><path class="bwxghiblf"/></g></mask></defs><path mask="url(#SVG5esZzcUE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:timeline"} {...others} />);
}

export default Component;
