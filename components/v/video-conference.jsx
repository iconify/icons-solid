import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/i/i1yn_n3se.css';
import '../../css/s/sr2ovzbeo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMMH8wrHj"><g class="aql7dnt-u"><path class="i1yn_n3se"/><path class="sr2ovzbeo"/></g></mask></defs><path mask="url(#SVGMMH8wrHj)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:video-conference"} {...others} />);
}

export default Component;
