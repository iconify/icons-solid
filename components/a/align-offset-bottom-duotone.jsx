import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/e/e8lb8uc3g.css';
import '../../css/l/l12_cmb5r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="e8lb8uc3g"/><path class="l12_cmb5r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-bottom-duotone"} {...others} />);
}

export default Component;
