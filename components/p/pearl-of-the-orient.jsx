import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/agef183bz.css';
import '../../css/b/bhm_s360t.css';
import '../../css/i/izz9u2a6d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCBLlyfqy"><g class="rohhhzb0l"><circle class="agef183bz"/><circle class="bhm_s360t"/><path class="izz9u2a6d"/></g></mask></defs><path mask="url(#SVGCBLlyfqy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pearl-of-the-orient"} {...others} />);
}

export default Component;
