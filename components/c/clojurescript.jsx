import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjc7046xa.css';
import '../../css/z/z1fo83bqa.css';
import '../../css/f/fa09fs7nj.css';
import '../../css/q/qcwz8b5ks.css';

const viewBox = {"width":128,"height":128};
const content = `<g class="ft5dv1b6b"><path class="jjc7046xa"/><path class="z1fo83bqa"/><path class="fa09fs7nj"/><path class="qcwz8b5ks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:clojurescript"} {...others} />);
}

export default Component;
