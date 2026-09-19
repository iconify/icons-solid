import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/gz0mc8htm.css';
import '../../css/t/t1l8wac3t.css';
import '../../css/i/iucmbeysh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6tSu8bXs"><g class="rohhhzb0l"><path class="gz0mc8htm"/><path class="t1l8wac3t"/><path class="iucmbeysh"/></g></mask></defs><path mask="url(#SVG6tSu8bXs)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:outgoing"} {...others} />);
}

export default Component;
