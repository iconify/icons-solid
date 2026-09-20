import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kqm9nfguj.css';
import '../../css/u/u0uv7qbej.css';
import '../../css/p/pwyf_lt5p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kqm9nfguj"/><path class="u0uv7qbej"/><path class="pwyf_lt5p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:microsoft-excel-logo"} {...others} />);
}

export default Component;
