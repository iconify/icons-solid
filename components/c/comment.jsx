import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wzn-hq2qa.css';
import '../../css/v/vvlq9ugnl.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlwAjhd1k"><g class="aql7dnt-u"><path class="wzn-hq2qa"/><path class="vvlq9ugnl"/></g></mask></defs><path mask="url(#SVGlwAjhd1k)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:comment"} {...others} />);
}

export default Component;
