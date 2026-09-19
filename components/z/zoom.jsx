import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/d/dod3i1bsk.css';
import '../../css/m/mf1jdvbha.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGZy0sTdUh"><g class="aql7dnt-u"><path class="dod3i1bsk"/><path class="mf1jdvbha"/></g></mask></defs><path mask="url(#SVGZy0sTdUh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:zoom"} {...others} />);
}

export default Component;
