import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/u/u06p2nbkp.css';
import '../../css/x/xzt4aekjt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="u06p2nbkp"/><path class="xzt4aekjt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:circle-right"} {...others} />);
}

export default Component;
