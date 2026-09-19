import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/k9nfxk8un.css';
import '../../css/r/r921pzb8j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGD6u2Fd6e"><g class="aql7dnt-u"><path class="k9nfxk8un"/><path class="r921pzb8j"/></g></mask></defs><path mask="url(#SVGD6u2Fd6e)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:right-run"} {...others} />);
}

export default Component;
