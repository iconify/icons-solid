import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ekmb91bny.css';
import '../../css/h/hzem-r0io.css';
import '../../css/f/f6fjwablo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="ekmb91bny"/><circle class="hzem-r0io"/><path class="f6fjwablo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:stethoscope"} {...others} />);
}

export default Component;
