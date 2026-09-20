import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tx1kcpc6o.css';
import '../../css/n/nn_kckb7q.css';
import '../../css/d/dsc0ybr9r.css';
import '../../css/t/tj546xb9n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tx1kcpc6o"/><path class="nn_kckb7q"/><path class="dsc0ybr9r"/><path class="tj546xb9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:day-sunrise-1"} {...others} />);
}

export default Component;
