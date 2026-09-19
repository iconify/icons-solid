import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k9nfxk8un.css';
import '../../css/p/p5hgppbbt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRtOZA69c"><g class="aql7dnt-u"><path class="k9nfxk8un"/><path class="p5hgppbbt"/></g></mask></defs><path mask="url(#SVGRtOZA69c)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:reverse-operation-in"} {...others} />);
}

export default Component;
