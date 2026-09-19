import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dhwc6r0ph.css';
import '../../css/y/yy40_gb2l.css';
import '../../css/k/k2lu90bwr.css';
import '../../css/y/yif_7eb6o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGsz25bd8b"><g class="ft5dv1b6b"><path class="dhwc6r0ph"/><rect class="yy40_gb2l"/><rect class="k2lu90bwr"/><path class="yif_7eb6o"/></g></mask></defs><path mask="url(#SVGsz25bd8b)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:charging-treasure"} {...others} />);
}

export default Component;
