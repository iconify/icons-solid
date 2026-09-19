import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/b/bqzj_jbnn.css';
import '../../css/s/s51uqybkz.css';
import '../../css/q/qmo-ysovi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlYaKVb2W"><g class="v3_i3wktz"><path class="bqzj_jbnn"/><path class="s51uqybkz"/><path class="qmo-ysovi"/></g></mask></defs><path mask="url(#SVGlYaKVb2W)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:add-music"} {...others} />);
}

export default Component;
