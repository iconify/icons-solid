import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jn5ns-bvo.css';
import '../../css/c/c105892kk.css';
import '../../css/v/vbin-qbry.css';
import '../../css/t/t8s921bqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jn5ns-bvo"/><path class="c105892kk"/><path class="vbin-qbry"/><path class="t8s921bqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:vinyl-record-gramophone"} {...others} />);
}

export default Component;
