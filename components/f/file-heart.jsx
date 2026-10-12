import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/halp-acqy.css';
import '../../css/t/tq-j1acxu.css';
import '../../css/m/mtjpkqjpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="halp-acqy"/><path class="tq-j1acxu"/><path class="mtjpkqjpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-heart"} {...others} />);
}

export default Component;
