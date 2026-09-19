import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/r/r5_m18j1a.css';
import '../../css/t/tmsihsbky.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8hcgmdmL"><g class="aql7dnt-u"><path class="r5_m18j1a"/><path class="tmsihsbky"/></g></mask></defs><path mask="url(#SVG8hcgmdmL)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:one-third-rotation"} {...others} />);
}

export default Component;
