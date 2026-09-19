import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/z/zxrl963_d.css';
import '../../css/k/k10hx2qog.css';
import '../../css/o/oaclm4ghi.css';
import '../../css/b/b_zoysbpp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvXdlvc7u"><g class="v3_i3wktz"><path class="zxrl963_d"/><path class="k10hx2qog"/><path class="oaclm4ghi"/><path class="b_zoysbpp"/></g></mask></defs><path mask="url(#SVGvXdlvc7u)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:drone-one"} {...others} />);
}

export default Component;
