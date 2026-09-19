import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/cyzfzpb2f.css';
import '../../css/x/xx16e09lg.css';
import '../../css/u/urcvvqb_d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5NbOwWUE"><g class="rohhhzb0l"><path class="cyzfzpb2f"/><path class="xx16e09lg"/><path class="urcvvqb_d"/></g></mask></defs><path mask="url(#SVG5NbOwWUE)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:protection"} {...others} />);
}

export default Component;
