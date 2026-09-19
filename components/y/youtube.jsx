import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s53vmbcgz.css';
import '../../css/v/vg_t11buy.css';
import '../../css/q/q8pnkob9v.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLjBCKdWb"><g class="s53vmbcgz"><path class="vg_t11buy"/><path class="q8pnkob9v"/></g></mask></defs><path mask="url(#SVGLjBCKdWb)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:youtube"} {...others} />);
}

export default Component;
