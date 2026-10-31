import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t3nz7t0_i.css';
import '../../css/z/zxzcak2rh.css';
import '../../css/q/qv7dlxb2b.css';
import '../../css/t/t0i_isgcr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t3nz7t0_i"/><path class="zxzcak2rh"/><path class="qv7dlxb2b"/><ellipse class="t0i_isgcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-database"} {...others} />);
}

export default Component;
