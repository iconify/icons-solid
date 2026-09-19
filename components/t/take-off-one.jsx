import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/rs1g-shrt.css';
import '../../css/n/nm4514u-e.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGodHBteUQ"><g class="aql7dnt-u"><path class="rs1g-shrt"/><path class="nm4514u-e"/></g></mask></defs><path mask="url(#SVGodHBteUQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:take-off-one"} {...others} />);
}

export default Component;
