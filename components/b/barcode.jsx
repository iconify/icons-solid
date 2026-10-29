import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1a51kbri.css';
import '../../css/x/xb8nkibtq.css';
import '../../css/a/ajx3eoq3x.css';
import '../../css/q/qeicwlb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b1a51kbri wm-shadow"/><path class="wm-k xb8nkibtq"/><path class="ajx3eoq3x wm-k"/><path class="qeicwlb3y wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:barcode"} {...others} />);
}

export default Component;
