import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p39nnsqho.css';
import '../../css/h/hdg58-alj.css';
import '../../css/z/zo23epbvc.css';
import '../../css/j/j8fx-qmyj.css';
import '../../css/r/r3q8yeb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p39nnsqho"/><rect class="hdg58-alj"/><path class="zo23epbvc"/><rect class="j8fx-qmyj"/><path class="r3q8yeb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pond"} {...others} />);
}

export default Component;
