import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/h9qj9o6mz.css';
import '../../css/d/dn-6osbwv.css';
import '../../css/p/pyd589bxf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3vuoSZSm"><g class="v3_i3wktz"><rect class="h9qj9o6mz"/><path class="dn-6osbwv"/><path class="pyd589bxf"/></g></mask></defs><path mask="url(#SVG3vuoSZSm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:view-grid-list"} {...others} />);
}

export default Component;
