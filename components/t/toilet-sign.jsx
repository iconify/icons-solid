import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xc-6cmbze.css';
import '../../css/s/spinb_bvm.css';
import '../../css/u/u6lqj5b8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xc-6cmbze"/><path class="spinb_bvm"/><path class="u6lqj5b8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:toilet-sign"} {...others} />);
}

export default Component;
