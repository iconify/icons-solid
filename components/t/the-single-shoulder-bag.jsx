import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o79otobmw.css';
import '../../css/v/vqep0fwtc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwzSr7b4o"><g class="aql7dnt-u"><path class="o79otobmw"/><path class="vqep0fwtc"/></g></mask></defs><path mask="url(#SVGwzSr7b4o)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:the-single-shoulder-bag"} {...others} />);
}

export default Component;
