import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqznn1ydc.css';
import '../../css/o/oq8pnh08o.css';
import '../../css/b/bp0f3-wqt.css';
import '../../css/k/k1369qbgk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrZx8ydWP"><g class="wqznn1ydc"><path class="oq8pnh08o"/><path class="bp0f3-wqt"/><path class="k1369qbgk"/></g></mask></defs><path mask="url(#SVGrZx8ydWP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:soccer"} {...others} />);
}

export default Component;
