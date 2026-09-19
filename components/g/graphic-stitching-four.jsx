import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yzy8hbb9y.css';
import '../../css/i/i3cltkb9x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGRcNQVnQT"><g class="aql7dnt-u"><path class="yzy8hbb9y"/><path class="i3cltkb9x"/></g></mask></defs><path mask="url(#SVGRcNQVnQT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:graphic-stitching-four"} {...others} />);
}

export default Component;
