import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/l/l44v9bgvv.css';
import '../../css/c/cptqxnrfy.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG0QuWAeAQ"><g class="aql7dnt-u"><path class="l44v9bgvv"/><path class="cptqxnrfy"/></g></mask></defs><path mask="url(#SVG0QuWAeAQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:press"} {...others} />);
}

export default Component;
