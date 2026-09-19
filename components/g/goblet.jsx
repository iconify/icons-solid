import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/krf-rdb_i.css';
import '../../css/h/hs7lmdbki.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGBtb9udWi"><g class="aql7dnt-u"><path class="krf-rdb_i"/><path class="hs7lmdbki"/></g></mask></defs><path mask="url(#SVGBtb9udWi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:goblet"} {...others} />);
}

export default Component;
