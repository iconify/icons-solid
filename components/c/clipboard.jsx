import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/kkl7zo0la.css';
import '../../css/d/dbgiium2z.css';
import '../../css/q/qed7hpbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="kkl7zo0la"/><path class="dbgiium2z"/><path class="qed7hpbeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:clipboard"} {...others} />);
}

export default Component;
