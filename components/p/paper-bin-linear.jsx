import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sdzf0cccf.css';
import '../../css/x/xfcsm6b8b.css';
import '../../css/b/bbj_fcggl.css';
import '../../css/d/d8xq11pqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="sdzf0cccf"/><path class="xfcsm6b8b"/><path class="bbj_fcggl"/><path class="d8xq11pqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:paper-bin-linear"} {...others} />);
}

export default Component;
