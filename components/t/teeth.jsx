import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dxuldfo8u.css';
import '../../css/m/mid7ym57a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG2HdZmdqm"><g class="rohhhzb0l"><path clip-rule="evenodd" class="dxuldfo8u"/><path class="mid7ym57a"/></g></mask></defs><path mask="url(#SVG2HdZmdqm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:teeth"} {...others} />);
}

export default Component;
