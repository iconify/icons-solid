import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uqg8leb2p.css';
import '../../css/e/ekmzz35gu.css';
import '../../css/d/dwbzpbc2e.css';
import '../../css/k/kz99pwb4b.css';
import '../../css/s/sl64ofbse.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uqg8leb2p wm-shadow"/><path class="ekmzz35gu wm-shadow"/><path class="dwbzpbc2e"/><path class="kz99pwb4b"/><path class="sl64ofbse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:mountain"} {...others} />);
}

export default Component;
