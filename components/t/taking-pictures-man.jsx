import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uoyrl7zbu.css';
import '../../css/u/u-uylkhfw.css';
import '../../css/a/ai593zq1u.css';
import '../../css/c/cbl9e3btd.css';
import '../../css/f/fxaniu0ed.css';
import '../../css/q/qp29n3bmm.css';
import '../../css/s/sgzyy-oxx.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="uoyrl7zbu"/><path class="u-uylkhfw"/><path class="ai593zq1u"/><path class="cbl9e3btd"/><path class="fxaniu0ed"/><path class="qp29n3bmm"/><path class="sgzyy-oxx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:taking-pictures-man"} {...others} />);
}

export default Component;
