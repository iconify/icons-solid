import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/y/y6x99abmn.css';
import '../../css/f/fdbt40b4q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG9Xd4UNCW"><g class="rohhhzb0l"><path class="y6x99abmn"/><path class="fdbt40b4q"/></g></mask></defs><path mask="url(#SVG9Xd4UNCW)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:file-cabinet"} {...others} />);
}

export default Component;
