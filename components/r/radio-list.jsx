import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/s/su3kdjb3z.css';
import '../../css/b/b74ikwezj.css';
import '../../css/q/qtas4abwh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hnsc5ccym"/><circle class="su3kdjb3z"/><circle class="su3kdjb3z"/><circle class="b74ikwezj"/><circle class="qtas4abwh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:radio-list"} {...others} />);
}

export default Component;
