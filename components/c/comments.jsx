import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/e/eavf2p1cc.css';
import '../../css/f/frmswmbkl.css';
import '../../css/i/i3_fwz-pn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGOsoKHeqO"><g class="gopnm44um"><path class="eavf2p1cc"/><path class="frmswmbkl"/><path class="i3_fwz-pn"/></g></mask></defs><path mask="url(#SVGOsoKHeqO)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:comments"} {...others} />);
}

export default Component;
