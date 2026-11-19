import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5v_u-btx.css';
import '../../css/w/wm9fzx3qi.css';
import '../../css/m/mjd6iy50w.css';
import '../../css/j/j9ks1ebww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5v_u-btx"/><path class="wm9fzx3qi"/><path class="mjd6iy50w"/><circle class="j9ks1ebww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-camera"} {...others} />);
}

export default Component;
