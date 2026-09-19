import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vuz12tb0u.css';
import '../../css/g/g46-d86xm.css';
import '../../css/a/a3p_upb_h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG91XdkcRe"><g class="rohhhzb0l"><path class="vuz12tb0u"/><path class="g46-d86xm"/><path class="a3p_upb_h"/></g></mask></defs><path mask="url(#SVG91XdkcRe)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:certificate"} {...others} />);
}

export default Component;
