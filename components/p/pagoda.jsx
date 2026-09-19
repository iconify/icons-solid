import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/f/fr7h38bjf.css';
import '../../css/e/ef6l1eg-m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGyssyseA"><g class="v3_i3wktz"><path class="fr7h38bjf"/><path class="ef6l1eg-m"/></g></mask></defs><path mask="url(#SVGGyssyseA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:pagoda"} {...others} />);
}

export default Component;
