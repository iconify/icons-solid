import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qpt02dbmh.css';
import '../../css/s/sc3loydhq.css';
import '../../css/d/dkwu7obva.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGCc0HrtcT"><g class="wwvp95byt"><path class="qpt02dbmh"/><path class="sc3loydhq"/><path class="dkwu7obva"/></g></mask></defs><path mask="url(#SVGCc0HrtcT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:doc-detail"} {...others} />);
}

export default Component;
