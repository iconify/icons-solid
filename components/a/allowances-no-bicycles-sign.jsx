import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/am1ovqb9r.css';
import '../../css/h/h0ffmhi_f.css';
import '../../css/e/e5p014b7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="am1ovqb9r"/><path class="h0ffmhi_f"/><path class="e5p014b7f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:allowances-no-bicycles-sign"} {...others} />);
}

export default Component;
