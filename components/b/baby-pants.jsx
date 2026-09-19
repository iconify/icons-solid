import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/j/j-mnydb-a.css';
import '../../css/w/wlfkgo59g.css';
import '../../css/l/l2jvo5b4v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGH50EMwWB"><g class="ufeehvblu"><path class="j-mnydb-a"/><path class="wlfkgo59g"/><path class="l2jvo5b4v"/></g></mask></defs><path mask="url(#SVGH50EMwWB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:baby-pants"} {...others} />);
}

export default Component;
