import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fxa5t9bup.css';
import '../../css/q/qcs51wjjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNmP5XcQo"><g class="v3_i3wktz"><path class="fxa5t9bup"/><path class="qcs51wjjn"/></g></mask></defs><path mask="url(#SVGNmP5XcQo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:sofa"} {...others} />);
}

export default Component;
