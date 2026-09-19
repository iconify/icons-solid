import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/om5rb4z9e.css';
import '../../css/h/h62eebccu.css';
import '../../css/f/fj8_lom1v.css';
import '../../css/f/f557nxb9g.css';
import '../../css/y/y9dyeo2-d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="om5rb4z9e"/><path class="h62eebccu"/><path class="fj8_lom1v"/><path class="f557nxb9g"/><path class="y9dyeo2-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:llvm"} {...others} />);
}

export default Component;
