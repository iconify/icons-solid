import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/w/wx67ces3c.css';
import '../../css/u/u0od4-lfi.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGeVkoSbwU"><g class="aql7dnt-u"><path class="wx67ces3c"/><path class="u0od4-lfi"/></g></mask></defs><path mask="url(#SVGeVkoSbwU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:party-balloon"} {...others} />);
}

export default Component;
