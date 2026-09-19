import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/i/issgrdd1r.css';
import '../../css/y/ytgl6lbch.css';
import '../../css/c/cg_jlr6fg.css';
import '../../css/x/x6m4tlbsz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGq98cbckh"><g class="rohhhzb0l"><path class="issgrdd1r"/><rect class="ytgl6lbch"/><path class="cg_jlr6fg"/><path class="x6m4tlbsz"/></g></mask></defs><path mask="url(#SVGq98cbckh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:copy-link"} {...others} />);
}

export default Component;
