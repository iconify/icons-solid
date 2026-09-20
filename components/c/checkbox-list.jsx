import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/d/d1k0wbbmk.css';
import '../../css/t/t4y3w9obw.css';
import '../../css/c/cr9fx3got.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hnsc5ccym"/><rect class="d1k0wbbmk"/><rect class="t4y3w9obw"/><rect class="cr9fx3got"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:checkbox-list"} {...others} />);
}

export default Component;
