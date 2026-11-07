import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdivp_bxj.css';
import '../../css/g/gh2z3q1ep.css';
import '../../css/u/uclgd2b0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdivp_bxj"/><path class="gh2z3q1ep"/><path class="uclgd2b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-cross-bold"} {...others} />);
}

export default Component;
