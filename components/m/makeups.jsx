import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/n/nn4_--rny.css';
import '../../css/r/rgsc31bsl.css';
import '../../css/f/f40xm6t9h.css';
import '../../css/n/nwy02mb2p.css';
import '../../css/p/p-g1mwb2w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlLxkudgu"><g class="rohhhzb0l"><path class="nn4_--rny"/><path class="rgsc31bsl"/><path class="f40xm6t9h"/><circle class="nwy02mb2p"/><circle class="p-g1mwb2w"/></g></mask></defs><path mask="url(#SVGlLxkudgu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:makeups"} {...others} />);
}

export default Component;
