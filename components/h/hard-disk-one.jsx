import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/p-3d8dotc.css';
import '../../css/f/fakfk8bqu.css';
import '../../css/d/db_wt-b_q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3VgYImqo"><g class="rohhhzb0l"><path class="p-3d8dotc"/><path class="fakfk8bqu"/><path class="db_wt-b_q"/></g></mask></defs><path mask="url(#SVG3VgYImqo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hard-disk-one"} {...others} />);
}

export default Component;
