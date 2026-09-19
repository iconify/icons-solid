import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/j/j4cvtu_gj.css';
import '../../css/k/kagyhebbk.css';
import '../../css/p/p6kiyzb2b.css';
import '../../css/o/o2ilxycix.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGvk1SqcgB"><g class="hv130ab-t"><path class="j4cvtu_gj"/><path class="kagyhebbk"/><circle class="p6kiyzb2b"/><path class="o2ilxycix"/></g></mask></defs><path mask="url(#SVGvk1SqcgB)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:permissions"} {...others} />);
}

export default Component;
