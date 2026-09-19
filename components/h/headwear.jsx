import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/c/c5-ywabzd.css';
import '../../css/h/h1wg54yab.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG161rPeGv"><g class="aql7dnt-u"><path class="c5-ywabzd"/><path class="h1wg54yab"/></g></mask></defs><path mask="url(#SVG161rPeGv)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:headwear"} {...others} />);
}

export default Component;
