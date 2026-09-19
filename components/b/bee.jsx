import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/p/pr5n7mb5f.css';
import '../../css/b/b7xcik0eh.css';
import '../../css/w/w9bcbnpgo.css';
import '../../css/d/dyisvyq3k.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGNUQcGcFP"><g class="rohhhzb0l"><path class="pr5n7mb5f"/><path class="b7xcik0eh"/><rect class="w9bcbnpgo"/><path class="dyisvyq3k"/></g></mask></defs><path mask="url(#SVGNUQcGcFP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:bee"} {...others} />);
}

export default Component;
