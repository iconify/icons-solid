import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/w/wxpv6lbah.css';
import '../../css/g/gw8968ukh.css';
import '../../css/c/ck-maf5kk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG1WTygbwX"><g class="gopnm44um"><path class="wxpv6lbah"/><path class="gw8968ukh"/><path class="ck-maf5kk"/></g></mask></defs><path mask="url(#SVG1WTygbwX)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:preschool"} {...others} />);
}

export default Component;
