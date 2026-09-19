import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/l/l1iy0ffsf.css';
import '../../css/g/gpho4gepl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGC4DXYCBl"><g class="v3_i3wktz"><path class="l1iy0ffsf"/><path class="gpho4gepl"/></g></mask></defs><path mask="url(#SVGC4DXYCBl)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:umbrella-one"} {...others} />);
}

export default Component;
