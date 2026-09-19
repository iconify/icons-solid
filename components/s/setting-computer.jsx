import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/h/hq5j0kbho.css';
import '../../css/n/nkrk9ac5v.css';
import '../../css/i/iug4c3bzv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLvgHDdTU"><g class="rohhhzb0l"><path class="hq5j0kbho"/><circle class="nkrk9ac5v"/><path class="iug4c3bzv"/></g></mask></defs><path mask="url(#SVGLvgHDdTU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:setting-computer"} {...others} />);
}

export default Component;
