import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tiy5f4bif.css';
import '../../css/q/q00jexb8o.css';
import '../../css/j/j1xjnqltu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZX7zMeFL"><g class="aql7dnt-u"><path class="tiy5f4bif"/><circle class="q00jexb8o"/><path class="j1xjnqltu"/></g></mask></defs><path mask="url(#SVGZX7zMeFL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:big-clock"} {...others} />);
}

export default Component;
