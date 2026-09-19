import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3cnp3bnz.css';
import '../../css/y/yxuosvb0o.css';
import '../../css/c/c18cudbcc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrhIUmdRm"><g class="ft5dv1b6b"><path class="v3cnp3bnz"/><path class="yxuosvb0o"/><path class="c18cudbcc"/></g></mask></defs><path mask="url(#SVGrhIUmdRm)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:three-triangles"} {...others} />);
}

export default Component;
