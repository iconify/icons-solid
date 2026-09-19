import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/h/ha1m0acqh.css';
import '../../css/w/wkxwu3bsi.css';
import '../../css/i/i1vxufb7n.css';
import '../../css/f/fxoqbf0fg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGyzgoLcxy"><g class="v3_i3wktz"><path class="ha1m0acqh"/><path class="wkxwu3bsi"/><path class="i1vxufb7n"/><path class="fxoqbf0fg"/></g></mask></defs><path mask="url(#SVGyzgoLcxy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mail-review"} {...others} />);
}

export default Component;
