import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/n/ne1xewb3x.css';
import '../../css/z/zkcdoy1on.css';
import '../../css/m/msh9cmbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect transform="rotate(90 6 13)" class="ne1xewb3x"/><rect transform="rotate(-90 17 12)" class="zkcdoy1on"/><path class="msh9cmbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:line-alt"} {...others} />);
}

export default Component;
