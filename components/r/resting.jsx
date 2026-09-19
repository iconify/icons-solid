import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/s/ssy0dsben.css';
import '../../css/e/ezuz2vp6m.css';
import '../../css/h/h9j524bhl.css';
import '../../css/i/irwxngb9g.css';
import '../../css/m/mvwxeabgr.css';
import '../../css/k/ksft0x80g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGD7aKwqDb"><g class="wwvp95byt"><path class="ssy0dsben"/><path class="ezuz2vp6m"/><path class="h9j524bhl"/><path class="irwxngb9g"/><path class="mvwxeabgr"/><path class="ksft0x80g"/></g></mask></defs><path mask="url(#SVGD7aKwqDb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:resting"} {...others} />);
}

export default Component;
