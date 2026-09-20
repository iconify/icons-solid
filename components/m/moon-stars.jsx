import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/m/mamqyxdna.css';
import '../../css/z/z3swhgbjn.css';
import '../../css/o/oj8zjab_w.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="mamqyxdna"/><path class="z3swhgbjn"/><path class="oj8zjab_w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:moon-stars"} {...others} />);
}

export default Component;
