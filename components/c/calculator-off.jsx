import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ylsozs8yo.css';
import '../../css/h/hpi2d62kj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ylsozs8yo"/><path class="hpi2d62kj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:calculator-off"} {...others} />);
}

export default Component;
