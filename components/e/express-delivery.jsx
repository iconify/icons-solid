import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/b3d8bdqux.css';
import '../../css/g/gfmcy23iy.css';
import '../../css/b/bj4z4zz1e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaKYXIFAT"><g class="v3_i3wktz"><path class="b3d8bdqux"/><path class="gfmcy23iy"/><path class="bj4z4zz1e"/></g></mask></defs><path mask="url(#SVGaKYXIFAT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:express-delivery"} {...others} />);
}

export default Component;
