import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/voafui-8n.css';
import '../../css/x/x8p7rvb4g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGiKumIbEH"><g class="rohhhzb0l"><path class="voafui-8n"/><path class="x8p7rvb4g"/></g></mask></defs><path mask="url(#SVGiKumIbEH)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sport"} {...others} />);
}

export default Component;
