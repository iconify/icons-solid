import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/a/aym_ncbha.css';
import '../../css/t/tp58hcb-p.css';
import '../../css/z/zqtd9-8hz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGaeEUdbIv"><g class="v3_i3wktz"><path class="aym_ncbha"/><path class="tp58hcb-p"/><path class="zqtd9-8hz"/></g></mask></defs><path mask="url(#SVGaeEUdbIv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:install"} {...others} />);
}

export default Component;
