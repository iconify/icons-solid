import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/q6w25xhkj.css';
import '../../css/n/nl1byab7m.css';
import '../../css/n/n_2diu23e.css';
import '../../css/r/ruam3sbry.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="q6w25xhkj"/><path class="nl1byab7m"/><path class="n_2diu23e"/><path class="ruam3sbry"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:task-clipboard-check"} {...others} />);
}

export default Component;
