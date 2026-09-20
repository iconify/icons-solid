import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/z/zvdwr1bxm.css';
import '../../css/e/ej8z41bas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="zvdwr1bxm"/><path class="ej8z41bas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box-open"} {...others} />);
}

export default Component;
