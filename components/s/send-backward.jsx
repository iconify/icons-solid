import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/y/ynqx2zfnc.css';
import '../../css/o/odhm74bfl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGd09YJeLr"><g class="v3_i3wktz"><path class="ynqx2zfnc"/><path class="odhm74bfl"/></g></mask></defs><path mask="url(#SVGd09YJeLr)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:send-backward"} {...others} />);
}

export default Component;
