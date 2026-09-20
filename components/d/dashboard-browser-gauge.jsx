import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcb-qgn8j.css';
import '../../css/z/zspru-b6e.css';
import '../../css/g/g5gj012zd.css';
import '../../css/d/d74wulbzc.css';
import '../../css/v/v5lk3ggit.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kcb-qgn8j"/><path class="zspru-b6e"/><path class="g5gj012zd"/><path class="d74wulbzc"/><path class="v5lk3ggit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:dashboard-browser-gauge"} {...others} />);
}

export default Component;
