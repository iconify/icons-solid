import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bnof37xfk.css';
import '../../css/h/hmx43h1zy.css';
import '../../css/q/qh2e39yog.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="bnof37xfk"/><path class="hmx43h1zy"/><path class="qh2e39yog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:paragraphs-indent"} {...others} />);
}

export default Component;
