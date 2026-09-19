import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/x/x_ct48b7d.css';
import '../../css/x/xt05grelv.css';
import '../../css/c/couy49bzm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMYzUucXz"><g class="v3_i3wktz"><path class="x_ct48b7d"/><path class="xt05grelv"/><path class="couy49bzm"/></g></mask></defs><path mask="url(#SVGMYzUucXz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:inbox-success"} {...others} />);
}

export default Component;
