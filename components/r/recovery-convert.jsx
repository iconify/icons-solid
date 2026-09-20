import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hz1vcwbqc.css';
import '../../css/g/gsjf04-qj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="hz1vcwbqc"/><path class="gsjf04-qj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:recovery-convert"} {...others} />);
}

export default Component;
