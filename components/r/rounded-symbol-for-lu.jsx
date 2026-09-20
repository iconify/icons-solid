import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpj65fbae.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/u/usozxnbrm.css';
import '../../css/t/tchcf3pop.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="hpj65fbae"/><g class="kdz4acc8r"><circle class="usozxnbrm"/><path class="tchcf3pop"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:rounded-symbol-for-lu"} {...others} />);
}

export default Component;
