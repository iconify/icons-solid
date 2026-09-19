import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/f0n0gx_qb.css';
import '../../css/w/wh9t1nbgu.css';
import '../../css/m/mikgwbcri.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEfrn2wlD"><g class="wwvp95byt"><path class="f0n0gx_qb"/><path class="wh9t1nbgu"/><path class="mikgwbcri"/></g></mask></defs><path mask="url(#SVGEfrn2wlD)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:milk"} {...others} />);
}

export default Component;
