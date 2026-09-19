import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/btc0ci6jt.css';
import '../../css/n/n9i8cmbmc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="power-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="btc0ci6jt"/><path class="n9i8cmbmc"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:power-outline"} {...others} />);
}

export default Component;
