import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io3b2ztit.css';
import '../../css/s/slwufksth.css';
import '../../css/k/kvf6v6b7p.css';
import '../../css/l/l74j16bxx.css';
import '../../css/y/y6qm2es2w.css';
import '../../css/d/dup5mpwpg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGr3MtHdbz"><g class="ft5dv1b6b"><path class="io3b2ztit"/><circle class="slwufksth"/><path class="kvf6v6b7p"/><circle class="l74j16bxx"/><circle class="y6qm2es2w"/><path class="dup5mpwpg"/></g></mask></defs><path mask="url(#SVGr3MtHdbz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:parenting-book"} {...others} />);
}

export default Component;
