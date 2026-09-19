import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/u/ukjk5y1zm.css';
import '../../css/r/rrm960bwt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGg1GVtbsw"><g class="rohhhzb0l"><path clip-rule="evenodd" class="ukjk5y1zm"/><path class="rrm960bwt"/></g></mask></defs><path mask="url(#SVGg1GVtbsw)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:mini-sd-card"} {...others} />);
}

export default Component;
