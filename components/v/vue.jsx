import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qfttfe_2y.css';
import '../../css/v/vt5inqbvm.css';
import '../../css/w/w7622wbzz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qfttfe_2y"><path class="vt5inqbvm"/><path class="w7622wbzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:vue"} {...others} />);
}

export default Component;
