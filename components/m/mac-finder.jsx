import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/v/v0h9_gb7k.css';
import '../../css/v/vu69zob8w.css';
import '../../css/u/ul-9w7bgg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2fXxuc5m"><g class="aql7dnt-u"><path class="v0h9_gb7k"/><path class="vu69zob8w"/><path class="ul-9w7bgg"/></g></mask></defs><path mask="url(#SVG2fXxuc5m)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mac-finder"} {...others} />);
}

export default Component;
