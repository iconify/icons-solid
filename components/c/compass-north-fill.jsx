import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/m/muqydz-ab.css';
import '../../css/a/aun8ln3zw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="muqydz-ab"/><path class="aun8ln3zw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:compass-north-fill"} {...others} />);
}

export default Component;
