import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ca13g7t3o.css';
import '../../css/h/h78girq9f.css';
import '../../css/u/u54lry2-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ca13g7t3o"/><path class="h78girq9f"/><path class="u54lry2-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:strategy-business-success-peak"} {...others} />);
}

export default Component;
