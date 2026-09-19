import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h12rk9boh.css';
import '../../css/u/u90vnfbeh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2FuPZbGp"><g class="aql7dnt-u"><path class="h12rk9boh"/><path class="u90vnfbeh"/></g></mask></defs><path mask="url(#SVG2FuPZbGp)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:children-pyramid"} {...others} />);
}

export default Component;
