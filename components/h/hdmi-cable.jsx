import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fin8fqq1t.css';
import '../../css/y/y_rgry6sf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5o6YId2w"><g class="wwvp95byt"><path class="fin8fqq1t"/><path class="y_rgry6sf"/></g></mask></defs><path mask="url(#SVG5o6YId2w)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hdmi-cable"} {...others} />);
}

export default Component;
