import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ydxabxbnj.css';
import '../../css/v/vuurv2ibs.css';
import '../../css/p/pcd69pb3f.css';
import '../../css/g/g3kkxobsr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGUoMZPgRZ"><g class="wwvp95byt"><path class="ydxabxbnj"/><path class="vuurv2ibs"/><path class="pcd69pb3f"/><path class="g3kkxobsr"/></g></mask></defs><path mask="url(#SVGUoMZPgRZ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:hot-pot"} {...others} />);
}

export default Component;
