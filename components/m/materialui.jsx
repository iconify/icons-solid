import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hsle34bel.css';
import '../../css/e/e24p9ccpg.css';
import '../../css/j/j3k06lbcb.css';
import '../../css/o/o6419p7rt.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hsle34bel"/><path class="e24p9ccpg"/><path class="j3k06lbcb"/><path class="o6419p7rt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:materialui"} {...others} />);
}

export default Component;
