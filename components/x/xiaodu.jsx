import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pes2rjbyp.css';
import '../../css/w/wvce_1bui.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGmHOpzeFG"><g class="wwvp95byt"><path class="pes2rjbyp"/><path class="wvce_1bui"/></g></mask></defs><path mask="url(#SVGmHOpzeFG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:xiaodu"} {...others} />);
}

export default Component;
