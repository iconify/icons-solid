import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qxlgbccih.css';
import '../../css/k/k_pdj69rf.css';
import '../../css/u/ui2s02ojw.css';
import '../../css/h/hadzi1b-h.css';

const viewBox = {"width":32,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="qxlgbccih"/><path class="k_pdj69rf"/><path class="ui2s02ojw"/><path class="hadzi1b-h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:st"} {...others} />);
}

export default Component;
