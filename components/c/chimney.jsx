import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/n/n14z80shh.css';
import '../../css/i/idauhp8zq.css';
import '../../css/p/pi8hrsboj.css';
import '../../css/x/xg9ll1rns.css';
import '../../css/j/jj4jy_bpm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG92qCdlUN"><g class="s9cl3zbei"><path class="n14z80shh"/><path class="idauhp8zq"/><path class="pi8hrsboj"/><path class="xg9ll1rns"/><path class="jj4jy_bpm"/></g></mask></defs><path mask="url(#SVG92qCdlUN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:chimney"} {...others} />);
}

export default Component;
