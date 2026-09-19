import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/no0o8zn6t.css';
import '../../css/e/e2kwj58os.css';
import '../../css/g/giocgzmps.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGR3EvCeMv"><g class="wwvp95byt"><path class="no0o8zn6t"/><path class="e2kwj58os"/><path class="giocgzmps"/></g></mask></defs><path mask="url(#SVGR3EvCeMv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:playback-progress"} {...others} />);
}

export default Component;
