import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/x/x0k02nrul.css';
import '../../css/t/tukm5qb8s.css';
import '../../css/i/ifs-v5bqs.css';
import '../../css/m/m9nrudbxy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="x0k02nrul"/><circle class="tukm5qb8s"/><circle class="ifs-v5bqs"/><circle class="m9nrudbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:settings-horizontal"} {...others} />);
}

export default Component;
