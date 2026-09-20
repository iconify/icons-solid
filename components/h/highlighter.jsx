import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w2ppgm4pk.css';
import '../../css/e/e4bde_bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w2ppgm4pk"/><path class="e4bde_bqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:highlighter"} {...others} />);
}

export default Component;
