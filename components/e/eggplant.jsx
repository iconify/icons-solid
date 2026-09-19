import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/ddmw1lqul.css';
import '../../css/i/iq3trbbun.css';
import '../../css/h/h12wcpb0y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGkEsF4YrA"><g class="rohhhzb0l"><path class="ddmw1lqul"/><path class="iq3trbbun"/><path class="h12wcpb0y"/></g></mask></defs><path mask="url(#SVGkEsF4YrA)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:eggplant"} {...others} />);
}

export default Component;
