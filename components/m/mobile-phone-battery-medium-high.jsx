import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yz-mambcf.css';
import '../../css/g/gtl_j0d7u.css';
import '../../css/l/li_aljb3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yz-mambcf"/><path class="gtl_j0d7u"/><path class="li_aljb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:mobile-phone-battery-medium-high"} {...others} />);
}

export default Component;
