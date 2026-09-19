import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/m/mkd5m1bpg.css';
import '../../css/u/ua_njy6de.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0xMIRcqN"><g class="wwvp95byt"><path class="mkd5m1bpg"/><circle class="ua_njy6de"/></g></mask></defs><path mask="url(#SVG0xMIRcqN)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:stamp"} {...others} />);
}

export default Component;
