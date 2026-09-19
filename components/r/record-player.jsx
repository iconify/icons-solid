import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l1yh7mbll.css';
import '../../css/d/dqi242g4v.css';
import '../../css/j/jfk16vbux.css';
import '../../css/x/xohwn7bsg.css';
import '../../css/i/iqfyq3i9d.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG39VPcdbN"><g class="ft5dv1b6b"><rect class="l1yh7mbll"/><path class="dqi242g4v"/><circle class="jfk16vbux"/><circle class="xohwn7bsg"/><path class="iqfyq3i9d"/></g></mask></defs><path mask="url(#SVG39VPcdbN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:record-player"} {...others} />);
}

export default Component;
