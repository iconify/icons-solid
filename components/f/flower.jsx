import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufie9ebgy.css';
import '../../css/i/idkm_n_ig.css';
import '../../css/v/vnf09r-ls.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ufie9ebgy"><path class="idkm_n_ig"/><path class="vnf09r-ls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:flower"} {...others} />);
}

export default Component;
