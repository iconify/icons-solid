import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/g/gufd03s5p.css';
import '../../css/v/velahuttd.css';
import '../../css/y/y2ls4efbx.css';
import '../../css/y/y-frmvbsb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><rect class="gufd03s5p"/><rect class="velahuttd"/><rect class="y2ls4efbx"/><path class="y-frmvbsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:widget-add"} {...others} />);
}

export default Component;
