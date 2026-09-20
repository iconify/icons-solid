import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wjd95_bar.css';
import '../../css/e/egctnk0pt.css';
import '../../css/g/gf5qrfb2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wjd95_bar"/><path class="egctnk0pt"/><path class="gf5qrfb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:cd-rom-disc-broken"} {...others} />);
}

export default Component;
