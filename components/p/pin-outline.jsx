import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jy_mr9b7h.css';
import '../../css/e/egxn25b7a.css';
import '../../css/x/xvs51v-6q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pin-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="jy_mr9b7h"/><path class="egxn25b7a"/><path class="xvs51v-6q"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:pin-outline"} {...others} />);
}

export default Component;
