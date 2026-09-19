import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f27q7-opf.css';
import '../../css/s/sdxioac2w.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRBuYglSB"><g class="aql7dnt-u"><path class="f27q7-opf"/><path class="sdxioac2w"/></g></mask></defs><path mask="url(#SVGRBuYglSB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:weixin-cards-offers"} {...others} />);
}

export default Component;
