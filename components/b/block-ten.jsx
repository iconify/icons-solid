import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/adexpl72i.css';
import '../../css/d/d70u10bbk.css';
import '../../css/d/dov8vg2gk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGIngd6caS"><g class="adexpl72i"><path class="d70u10bbk"/><path class="dov8vg2gk"/></g></mask></defs><path mask="url(#SVGIngd6caS)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:block-ten"} {...others} />);
}

export default Component;
