import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pddcmsbna.css';
import '../../css/d/dn0mdxfaw.css';
import '../../css/c/cno_h1bwt.css';
import '../../css/r/rgii3wb9y.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="pddcmsbna"/><circle class="dn0mdxfaw"/><circle class="cno_h1bwt"/><path class="rgii3wb9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:test-tube"} {...others} />);
}

export default Component;
