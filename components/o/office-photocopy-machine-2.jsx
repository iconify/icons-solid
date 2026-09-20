import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hzpxzpblh.css';
import '../../css/c/cb_ci4bjj.css';
import '../../css/m/mfdfogbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="hzpxzpblh"/><path class="cb_ci4bjj"/><path class="mfdfogbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-photocopy-machine-2"} {...others} />);
}

export default Component;
