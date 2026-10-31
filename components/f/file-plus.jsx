import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dp49bsb_r.css';
import '../../css/p/p5jltiloh.css';
import '../../css/z/z0prpmb5y.css';
import '../../css/b/bbf1ddbmn.css';
import '../../css/f/fj9dagbxo.css';
import '../../css/i/i58vsty7y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dp49bsb_r wm-k"/><path class="p5jltiloh wm-deco"/><path class="wm-k z0prpmb5y"/><path class="bbf1ddbmn wm-k"/><path class="fj9dagbxo wm-shadow"/><path class="i58vsty7y wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:file-plus"} {...others} />);
}

export default Component;
