import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jhjpckbvk.css';
import '../../css/e/ezvtrm6iz.css';
import '../../css/m/mg6lwxb5m.css';
import '../../css/q/qmdliab1a.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jhjpckbvk"/><path class="ezvtrm6iz"/><path class="mg6lwxb5m"/><path class="qmdliab1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:cm"} {...others} />);
}

export default Component;
