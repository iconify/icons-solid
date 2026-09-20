import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/i/ixunwlb5p.css';
import '../../css/m/mpqx78bqh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="ixunwlb5p"/><path class="mpqx78bqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:structure"} {...others} />);
}

export default Component;
