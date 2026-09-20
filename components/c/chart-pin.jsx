import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lwnrebcsd.css';
import '../../css/q/q1se71oae.css';
import '../../css/g/galbvhezo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lwnrebcsd"/><path class="q1se71oae"/><circle class="galbvhezo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chart-pin"} {...others} />);
}

export default Component;
