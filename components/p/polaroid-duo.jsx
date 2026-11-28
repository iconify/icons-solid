import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwa3_zbyy.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i_dg2gbxb.css';
import '../../css/c/co23gdcen.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwa3_zbyy secondary"/><g class="dt0cm9dhy primary"><path class="i_dg2gbxb"/><path class="co23gdcen"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:polaroid-duo"} {...others} />);
}

export default Component;
