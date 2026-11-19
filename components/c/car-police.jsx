import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbhttpbap.css';
import '../../css/h/h1bvl3pfu.css';
import '../../css/e/e3lvzlbqo.css';
import '../../css/a/apv8k2b6e.css';
import '../../css/m/m_bnqmb7q.css';
import '../../css/l/l2-6yqbod.css';
import '../../css/y/y68srvbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hbhttpbap"/><path class="h1bvl3pfu"/><path class="e3lvzlbqo"/><circle class="apv8k2b6e"/><circle class="m_bnqmb7q"/><path class="l2-6yqbod"/><path class="y68srvbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:car-police"} {...others} />);
}

export default Component;
