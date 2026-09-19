import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/c/c-oefac8g.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXTysScpk"><g class="adexpl72i"><rect class="r8cyu3bwz"/><rect class="c-oefac8g"/></g></mask></defs><path mask="url(#SVGXTysScpk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:zero-key"} {...others} />);
}

export default Component;
