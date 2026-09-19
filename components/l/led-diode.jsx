import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/x/xrvg61rmh.css';
import '../../css/f/f09buvbhx.css';
import '../../css/e/e7yfwzb-i.css';
import '../../css/b/bhm_s360t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0jWV4dMU"><g class="aql7dnt-u"><path class="xrvg61rmh"/><path class="f09buvbhx"/><path class="e7yfwzb-i"/><circle class="bhm_s360t"/></g></mask></defs><path mask="url(#SVG0jWV4dMU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:led-diode"} {...others} />);
}

export default Component;
