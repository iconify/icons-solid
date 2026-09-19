import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/l/l8-7_vbmo.css';
import '../../css/v/vn2loybei.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSqD1uCIk"><g class="wwvp95byt"><rect class="l8-7_vbmo"/><path class="vn2loybei"/></g></mask></defs><path mask="url(#SVGSqD1uCIk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:scan-setting"} {...others} />);
}

export default Component;
