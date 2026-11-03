import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htnqb_kqh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="htnqb_kqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:mysqlworkbench"} {...others} />);
}

export default Component;
