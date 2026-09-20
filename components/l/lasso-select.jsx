import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/am01-bzcc.css';
import '../../css/g/ghhbgeb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="am01-bzcc"/><path class="ghhbgeb3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:lasso-select"} {...others} />);
}

export default Component;
