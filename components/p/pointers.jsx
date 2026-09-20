import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t_top4b6c.css';
import '../../css/r/rd6wyq7pa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="t_top4b6c"/><path class="rd6wyq7pa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pointers"} {...others} />);
}

export default Component;
