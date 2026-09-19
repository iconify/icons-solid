import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/c/c3gxzqk3r.css';
import '../../css/h/h-lp_vb0a.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGVHvGbeBU"><g class="rohhhzb0l"><path clip-rule="evenodd" class="c3gxzqk3r"/><path class="h-lp_vb0a"/></g></mask></defs><path mask="url(#SVGVHvGbeBU)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:theater"} {...others} />);
}

export default Component;
