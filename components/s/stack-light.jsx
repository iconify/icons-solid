import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/r/rsqaxjbon.css';
import '../../css/x/x2opukbfv.css';
import '../../css/v/vds6lqbpe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEryUvHPo"><g class="v3_i3wktz"><path class="rsqaxjbon"/><path class="x2opukbfv"/><path class="vds6lqbpe"/></g></mask></defs><path mask="url(#SVGEryUvHPo)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stack-light"} {...others} />);
}

export default Component;
