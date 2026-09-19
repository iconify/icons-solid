import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/r_e0x_bru.css';
import '../../css/k/kkorzz3fw.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUL5lIbwM"><g class="v3_i3wktz"><path class="r_e0x_bru"/><path class="kkorzz3fw"/><path class="j9hg1or3h"/></g></mask></defs><path mask="url(#SVGUL5lIbwM)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:monument-one"} {...others} />);
}

export default Component;
