import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/mx0akxtcz.css';
import '../../css/f/frnz_dbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="mx0akxtcz"/><path class="frnz_dbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ghost3"} {...others} />);
}

export default Component;
