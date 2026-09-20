import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lzbq1d81g.css';
import '../../css/w/wts51mbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lzbq1d81g"/><path class="wts51mbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:pentagram"} {...others} />);
}

export default Component;
