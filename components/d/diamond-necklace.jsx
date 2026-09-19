import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/n/noh310a9s.css';
import '../../css/u/uok4w2qih.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwtf1lbsB"><g class="aql7dnt-u"><path class="noh310a9s"/><path class="uok4w2qih"/></g></mask></defs><path mask="url(#SVGwtf1lbsB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:diamond-necklace"} {...others} />);
}

export default Component;
