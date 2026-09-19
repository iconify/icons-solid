import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/w/wo_zr_q_a.css';
import '../../css/s/szey3hb9c.css';
import '../../css/h/hnkarubbw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsQCnLy1J"><g class="rohhhzb0l"><path class="wo_zr_q_a"/><path class="szey3hb9c"/><circle class="hnkarubbw"/></g></mask></defs><path mask="url(#SVGsQCnLy1J)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:s-turn-down"} {...others} />);
}

export default Component;
