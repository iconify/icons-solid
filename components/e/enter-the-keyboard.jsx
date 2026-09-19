import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rgna-dbok.css';
import '../../css/w/w-46dcbay.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGSgjLNcpB"><g class="v3_i3wktz"><path class="rgna-dbok"/><path class="w-46dcbay"/></g></mask></defs><path mask="url(#SVGSgjLNcpB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:enter-the-keyboard"} {...others} />);
}

export default Component;
