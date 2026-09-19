import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/v/vw3aex42z.css';
import '../../css/r/rvdel8boi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIWLV7cOc"><g class="gopnm44um"><path class="vw3aex42z"/><path class="rvdel8boi"/></g></mask></defs><path mask="url(#SVGIWLV7cOc)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:topic-discussion"} {...others} />);
}

export default Component;
