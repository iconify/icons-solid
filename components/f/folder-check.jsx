import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/btgc_sbaw.css';
import '../../css/m/mcinq7b2v.css';
import '../../css/y/yu0shrb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="btgc_sbaw"/><path class="mcinq7b2v"/><path class="yu0shrb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:folder-check"} {...others} />);
}

export default Component;
