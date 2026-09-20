import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qmop-ib2u.css';
import '../../css/o/o9zq4rb9l.css';
import '../../css/j/jrlak1_qt.css';
import '../../css/r/rkogc9fcb.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qmop-ib2u"/><path class="o9zq4rb9l"/><path clip-rule="evenodd" class="jrlak1_qt"/><path clip-rule="evenodd" class="rkogc9fcb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hotel-laundry-flat"} {...others} />);
}

export default Component;
