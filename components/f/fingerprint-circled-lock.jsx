import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bkbgjrbao.css';
import '../../css/k/k6rstmvnk.css';
import '../../css/h/hhj58fbib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bkbgjrbao"/><path class="k6rstmvnk"/><path class="hhj58fbib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:fingerprint-circled-lock"} {...others} />);
}

export default Component;
