import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/g/g3mesomnj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="dbgvcxwad"/><path class="g3mesomnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:copyleft"} {...others} />);
}

export default Component;
