import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kub79kb4f.css';
import '../../css/n/nhij4gz1o.css';
import '../../css/d/dq_x0bcxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kub79kb4f"/><path class="nhij4gz1o"/><path class="dq_x0bcxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:draft"} {...others} />);
}

export default Component;
