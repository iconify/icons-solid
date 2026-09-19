import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/o/oy5gpjbhz.css';
import '../../css/s/s_ydpvbdg.css';
import '../../css/g/gkzojlsdx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGQkwYHecj"><g class="gopnm44um"><path class="oy5gpjbhz"/><path class="s_ydpvbdg"/><path class="gkzojlsdx"/></g></mask></defs><path mask="url(#SVGQkwYHecj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:copy-one"} {...others} />);
}

export default Component;
