import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qbz4yzbkb.css';
import '../../css/m/md286fbip.css';
import '../../css/l/lky8rsbsc.css';
import '../../css/m/m55nhz01q.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="qbz4yzbkb"/><g class="md286fbip"><path class="lky8rsbsc"/><path class="m55nhz01q"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:call"} {...others} />);
}

export default Component;
