import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/a/aqhc3dbwk.css';
import '../../css/b/bpfzin4my.css';
import '../../css/x/xh7m5gdmf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGuC7NVbcr"><g class="wwvp95byt"><path class="aqhc3dbwk"/><path class="bpfzin4my"/><path class="xh7m5gdmf"/></g></mask></defs><path mask="url(#SVGuC7NVbcr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:iron-three"} {...others} />);
}

export default Component;
