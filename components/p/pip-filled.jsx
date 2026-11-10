import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_wuukbdi.css';
import '../../css/q/qvktie0-n.css';
import '../../css/p/p0kcvcc8c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x_wuukbdi"/><path class="qvktie0-n"/><path class="p0kcvcc8c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pip-filled"} {...others} />);
}

export default Component;
