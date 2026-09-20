import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/g/g1ygkpenk.css';
import '../../css/e/eq4ku8q_n.css';
import '../../css/q/q58jyg4uk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="g1ygkpenk"/><path class="eq4ku8q_n"/><circle class="q58jyg4uk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:ball-basket"} {...others} />);
}

export default Component;
