import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/xedzjig2g.css';
import '../../css/n/nbd5myb6l.css';
import '../../css/c/cpz6tmb0l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrMLoYbfG"><g class="v3_i3wktz"><path class="xedzjig2g"/><path class="nbd5myb6l"/><path class="cpz6tmb0l"/></g></mask></defs><path mask="url(#SVGrMLoYbfG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:folder-lock"} {...others} />);
}

export default Component;
