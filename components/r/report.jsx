import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/d/dn5joqb2b.css';
import '../../css/l/lqwcol_8m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNbbQMcwu"><g class="v3_i3wktz"><path class="dn5joqb2b"/><path class="lqwcol_8m"/></g></mask></defs><path mask="url(#SVGNbbQMcwu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:report"} {...others} />);
}

export default Component;
